FROM node:14.19-bullseye-slim as build
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock
RUN yarn install --frozen-lockfile
COPY gatsby-browser.js gatsby-config.js gatsby-node.js gatsby-ssr.js tsconfig.json /app/
COPY content /app/content
COPY src /app/src
COPY static /app/static
COPY plugins /app/plugins
COPY utils /app/utils
ARG REACT_APP_GITHUB_KEY
ENV GATSBY_BACKEND_URL="https://creator-app-backend"

# in the end, because they change often
ARG CONFIG_APP_RELEASE
ENV CONFIG_APP_RELEASE=${CONFIG_APP_RELEASE:-unreleased}

RUN yarn build

FROM nginx:1.21.6
COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build /app/public /usr/share/nginx/html
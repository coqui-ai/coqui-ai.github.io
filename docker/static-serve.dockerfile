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
ENV GATSBY_BACKEND_URL="https://creator-app-backend"

# in the end, because they change often
ARG CONFIG_APP_RELEASE
ARG GATSBY_FRONTEND_URL
ENV SOURCE_VERSION=${CONFIG_APP_RELEASE:-unreleased}
ENV GATSBY_SOURCE_VERSION=${CONFIG_APP_RELEASE:-unreleased}
ARG GATSBY_AMPLITUDE_PROJECT_KEY

RUN yarn build

FROM nginx:1.21.6
COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build /app/public /usr/share/nginx/html
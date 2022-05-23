FROM node:14.16-slim as build
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock
RUN yarn install --frozen-lockfile
COPY . .
ARG GATSBY_BACKEND_URL
ARG REACT_APP_GITHUB_KEY
RUN yarn build

FROM nginx:1.21.6
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/public /usr/share/nginx/html

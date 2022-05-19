FROM node:16.15-bullseye-slim as build
ARG GATSBY_BACKEND_URL
ARG REACT_APP_GITHUB_KEY
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.21.6
COPY --from=build /app/public /usr/share/nginx/html

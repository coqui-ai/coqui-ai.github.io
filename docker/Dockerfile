# This is a dev docker image to run it as a container as part
# of the `CreatorApplications` docker-compose configuration.

# It's not for production usage.

ARG TLS_SCRIPTS_MODULE_INSTALL_PATH=/tmp/tls-scripts-module

FROM ubuntu:20.04 as with-secrets
# Note that the ARG must be re-declared within this FROM block, without a value, in order to correctly be set to the global value above
# See: https://docs.docker.com/engine/reference/builder/#understand-how-arg-and-from-interact
ARG TLS_SCRIPTS_MODULE_INSTALL_PATH

# github-oauth-token for accessing private repos
ARG GITHUB_OAUTH_TOKEN

# The github token is required at build-time, so bail out with an error if it's not provided
RUN if [ -z "$GITHUB_OAUTH_TOKEN" ]; then echo "ERROR: You must set GITHUB_OAUTH_TOKEN as a Docker build arg."; exit 1; fi

# Install gruntwork-installer

# Install dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl && \
    rm -rf /var/lib/apt/lists/*

RUN curl -LsS "https://raw.githubusercontent.com/gruntwork-io/gruntwork-installer/master/bootstrap-gruntwork-installer.sh" | bash /dev/stdin --version v0.0.28 --no-sudo true

# Create the tmp directory to install the TLS scripts module to
RUN mkdir -p "$TLS_SCRIPTS_MODULE_INSTALL_PATH"

# Install tls scripts module from the Gruntwork AWS service catalog
RUN gruntwork-install --repo "https://github.com/gruntwork-io/terraform-aws-service-catalog" --module-name "tls-scripts" --branch "master" --download-dir "$TLS_SCRIPTS_MODULE_INSTALL_PATH"


FROM node:16.15-slim

ARG TLS_SCRIPTS_MODULE_INSTALL_PATH
COPY --from=with-secrets "$TLS_SCRIPTS_MODULE_INSTALL_PATH/tls-scripts/*.sh" /usr/local/bin/

# mozjpeg stuff mostly
RUN apt-get update && apt-get install -y \
    cmake autoconf automake libtool nasm make pkg-config git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src
COPY package.json /usr/src/package.json
COPY yarn.lock /usr/src/yarn.lock
RUN yarn install

ARG GITHUB_OAUTH_TOKEN
ENV REACT_APP_GITHUB_KEY=${GITHUB_OAUTH_TOKEN}

# It'd be hard to make it buildable here because it needs a schema from the backend
# RUN npm build

VOLUME ["/usr/src/app"]
VOLUME ["/usr/src/app/node_modules"]
WORKDIR /usr/src/app

RUN ln -s /usr/src/node_modules /usr/src/app/node_modules

# FIXME: remove when not needed
ENV ABSTRACT_TOKEN 1 

EXPOSE 8000

CMD ["yarn", "run", "start"]

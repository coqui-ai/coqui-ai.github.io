# Coqui Website

> :frog: Using the design system by Zendesk

This repo contains the [Gatsby](https://www.gatsbyjs.org/)-powered site for
[coqui.ai](https://coqui.ai/).

## Development

Parts of the website connect to a GraphQL backend implemented in the
[CreatorApplications](https://github.com/coqui-ai/CreatorApplications) repository. The `GATSBY_BACKEND_URL` environment
variable determines which server to send requests to for the dynamic pages. In order to set up a local development
environment with backend and frontend servers, you'll first need to clone both repos side-by-side:

```bash
$ git clone git@github.com:coqui-ai/coqui-ai.github.io.git
$ git clone git@github.com:coqui-ai/CreatorApplications.git
```

Then, start the backend server using Docker Compose:

```bash
$ cd CreatorApplications
$ export GITHUB_OAUTH_TOKEN=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
$ export AWS_ACCESS_KEY_ID=AKIAXW7NFYT5F2KY3J4D
$ export AWS_SECRET_ACCESS_KEY=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
$ docker-compose up -d --build
$ docker-compose logs -f backend # this will stream backend logs on the terminal
$ # check that server starts up successfully
$ # sometimes on first start there's a database error due to PostgreSQL not being ready yet
$ # if that happens just start the containers again with: $ docker-compose up -d --build
```

Finally, in a new terminal start the frontend development server and point it to the local backend server:

```bash
$ cd coqui-ai.github.io
$ nvm use 14.19
$ yarn install
$ export REACT_APP_GITHUB_KEY=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
$ export GATSBY_BACKEND_URL="http://localhost:8001"
$ yarn start --https
```

This will then open the website on [https://localhost:8000](https://localhost:8000).

## Editor pages

Editor pages are present but not linked to from anywhere: [https://localhost:8000/editor/](https://localhost:8000/editor/)

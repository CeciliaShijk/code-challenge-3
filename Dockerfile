FROM node:14-alpine as frontend
WORKDIR  /code_challenge/my-app
COPY my-app/package.json .
COPY my-app/yarn.lock .
RUN yarn install
COPY code_challenge/my-app .

FROM node:14-alpine as backend
WORKDIR /code_challenge/express_project
RUN yarn install
COPY code_challenge/express_project .

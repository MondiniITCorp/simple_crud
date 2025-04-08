########################
# BUILD FOR PRODUCTION #
########################

FROM node:lts-alpine as builder

ENV NODE_ENV build

WORKDIR /app/

COPY package*.json ./

RUN npm i

COPY . .

ENTRYPOINT [ "npm", "run", "dev" ] 
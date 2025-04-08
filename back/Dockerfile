FROM node:lts-alpine as builder

ENV NODE_ENV build

WORKDIR /app/

# Instala as dependências do sistema necessárias para compilar módulos nativos
RUN apk add --no-cache python3 make g++ 

COPY package*.json ./

# Instala as dependências no contêiner
RUN npm install --build-from-source

COPY . .

RUN npm run build \
    && npm prune --production

########################
#      PRODUCTION      #
########################

FROM node:lts-alpine as production

ENV NODE_ENV production
EXPOSE 3000

WORKDIR /app/
RUN mkdir data

COPY --from=builder /app/package*.json /app/
COPY --from=builder /app/node_modules/ /app/node_modules/
COPY --from=builder /app/dist/ /app/dist/

CMD [ "node", "dist/main.js" ]
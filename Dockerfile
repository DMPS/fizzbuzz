FROM node:10-alpine as BASE

ENV PORT="8080"

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm ci

COPY --chown=node:node . .

FROM BASE as PROD

EXPOSE 8080

CMD ["node", "src/index.js"]

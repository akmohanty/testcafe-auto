FROM node:13.5.0-alpine3.11

COPY /node-app/package*.json /

RUN npm ci --only=production

COPY /node-app/server.js .

ADD VERSION .

EXPOSE 8080
CMD [ "node", "server.js"]

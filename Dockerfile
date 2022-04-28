# Builder
FROM node:16-alpine as builder

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY vite.config.js ./

COPY src/ ./src/

COPY index.html ./

RUN npm install

CMD ["npm", "run", "preview"]
# Builder
FROM node:16-alpine as builder

ENV NODE_ENV production

WORKDIR /app

COPY package*.json .

RUN npm ci --only=production

COPY . ./

RUN npm run build

# NGINX
FROM nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
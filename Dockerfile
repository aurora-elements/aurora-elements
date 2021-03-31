FROM node:15 AS builder
WORKDIR /aurora
COPY package*.json /aurora
RUN npm install
COPY webpack.config.js /aurora
COPY src /aurora
RUN npm run build

FROM nginx:stable-alpine AS production
RUN rm /etc/nginx/conf.d/default.conf
COPY docker/nginx.conf /etc/nginx/conf.d
COPY --from=builder /aurora/dist /usr/share/nginx/html
EXPOSE 80
CMD nginx -g "daemon off;"


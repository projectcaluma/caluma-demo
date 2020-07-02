FROM node:8 as frontend

COPY package.json yarn.lock /app/

WORKDIR /app

RUN yarn

COPY . /app

RUN yarn ember deploy production

FROM nginx:alpine as nginx

COPY --from=frontend /app/tmp/deploy-dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

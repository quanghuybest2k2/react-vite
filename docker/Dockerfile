FROM node:20 AS build

WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM nginx:1.27.1

COPY --from=build /app/dist /usr/share/nginx/html

COPY ./docker/nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]

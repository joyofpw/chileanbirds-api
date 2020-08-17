# https://mherman.org/blog/dockerizing-a-react-app/
# Build React
FROM node:13.12.0-alpine AS build

WORKDIR /src

ENV PATH node_modules/.bin:$PATH

COPY src/frontend/package.json ./
COPY src/frontend/yarn.lock ./

RUN npm install --silent
COPY src/frontend ./
RUN npm run build

# Serve with Nginx
FROM nginx:1.17.10-alpine
COPY --from=build /src/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY docker/react/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

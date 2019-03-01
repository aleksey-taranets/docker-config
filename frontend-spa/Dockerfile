# Build Image
FROM node:10-alpine AS base

# Dev environment arguments
ARG WORK_DIR

# copy package files
COPY package*.json ./

# install modules
RUN npm install

COPY . ./

# Build project
RUN npm run build

#------------ Production Image ------------
FROM nginx

# Ports
EXPOSE 80

# Copy files from base image
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=base build /usr/share/nginx/html

# Build Image
FROM node:10-alpine AS base

# Dev environment arguments
ARG WORK_DIR

# Set up app directory
WORKDIR $WORK_DIR

# copy package files
COPY package.json ./
COPY yarn.lock ./

# install modules
RUN yarn

COPY . ./

# lint and test before build
RUN yarn test

# Build project
RUN yarn build

#------------ Production Image ------------
FROM keymetrics/pm2:10-alpine

# Environment arguments
ARG WORK_DIR

# Set up app directory
WORKDIR $WORK_DIR

# copy package files
COPY package.json ./
COPY yarn.lock ./
COPY pm2.config.js ./

# install modules
RUN yarn --production

# Copy files from base image
COPY --from=base /$WORK_DIR/build ./build

# Ports
EXPOSE 80

# run application
CMD ["pm2-runtime", "start", "pm2.config.js"]

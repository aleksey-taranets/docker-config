# Build Image
FROM node:10-alpine AS base

# Set up app directory
ARG WORK_DIR
WORKDIR $WORK_DIR

# copy package files
COPY package.json yarn.lock ./

# install modules
RUN yarn

COPY . ./

# lint and test before build
RUN yarn test

# Build project
RUN yarn build

#------------ Production Image ------------
FROM keymetrics/pm2:10-alpine

# Set up app directory
ARG WORK_DIR
WORKDIR $WORK_DIR

# copy package files
COPY package.json yarn.lock pm2.config.js ./

# install modules
RUN yarn --production

# Copy files from base image
COPY --from=base /$WORK_DIR/build ./build

# allow non-root users use < 1024 ports
RUN apk add libcap
RUN setcap 'cap_net_bind_service=+ep' `which node`

# add custom user 
RUN addgroup -S nodejs && adduser -S nodejs -G nodejs
RUN chown -R nodejs:nodejs $WORK_DIR
USER nodejs

# Ports
EXPOSE 80 443

# run application
CMD ["pm2-runtime", "start", "pm2.config.js"]

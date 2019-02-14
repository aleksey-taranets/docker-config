# Build Image
FROM node:10-alpine AS base

# Set up app directory
ARG WORK_DIR
WORKDIR $WORK_DIR

# copy package files
COPY package.json yarn.lock next.config.js ./

# install modules
RUN yarn

COPY . ./

# Build project
RUN yarn build

#---------- Production Image ----------
FROM keymetrics/pm2:10-alpine

# Set up app directory
ARG WORK_DIR
WORKDIR $WORK_DIR

# copy package & config files
COPY package.json yarn.lock next.config.js pm2.config.js ./

# install modules
RUN yarn --production

# Copy needed files
COPY --from=base /$WORK_DIR/build ./build

# Ports
EXPOSE 80

# run application
CMD ["pm2-runtime", "start", "pm2.config.js"]
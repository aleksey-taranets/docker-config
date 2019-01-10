# Image
FROM node:10-alpine

# Environment arguments
ARG WORK_DIR

# Set up app directory
WORKDIR $WORK_DIR

# copy package files
COPY package.json ./
COPY yarn.lock ./

# install modules
RUN yarn

# run application
CMD ["yarn", "dev"]
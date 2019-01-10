# Image
FROM node:10-alpine

# Dev environment arguments
ARG WORK_DIR
ENV PORT=80

# Set up app directory
WORKDIR $WORK_DIR

# copy package files
COPY package.json ./
COPY yarn.lock ./

# install modules
RUN yarn

# run application
CMD ["yarn", "dev"]
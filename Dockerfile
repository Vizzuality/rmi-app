FROM node:8.10

ENV DEBIAN_FRONTEND noninteractive
ENV NODE_ENV production
ENV API_URL http://rmi.vizzuality.com/api
# ENV API_TOKEN b6e896fbd1f948485be200451956369ffe0b1699271855810db2503ae8485c3b7fe4a8e17942180cf0df30ef9cb0136dc7e12eafab21e9ed0204049021f16ddf

RUN apt-get update && apt-get install -y \
      bash git build-essential automake autoconf make g++ libtool apt-transport-https python \
      ca-certificates curl gnupg python apt-utils \
      --no-install-recommends \
    && curl -sSL https://dl.google.com/linux/linux_signing_key.pub | apt-key add - \
	  && echo "deb [arch=amd64] https://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list \
    && apt-get clean && apt-get autoremove && apt-get update \
    && apt-get install -y \
      google-chrome-stable \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && npm install -g node-gyp --loglevel warn

WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app
RUN yarn install --production

# Bundle app source
COPY . /usr/src/app

RUN yarn run build

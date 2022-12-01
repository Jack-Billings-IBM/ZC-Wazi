#FROM icr.io/ibmz/node:16
FROM node:16

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
ENV PORT 3000
# Bundle app source
COPY . /usr/src/app

EXPOSE 3000

CMD [ "npm", "start" ]

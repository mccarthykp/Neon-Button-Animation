FROM node:16

# Copy source code to container in folder named /app
ADD . /app

# Create app directory
WORKDIR /app

# Install dependencies & ensure both package.json & package-lock.json are copied
COPY package*.json ./
RUN npm install

EXPOSE 5003
CMD [ "node", "app.js" ]

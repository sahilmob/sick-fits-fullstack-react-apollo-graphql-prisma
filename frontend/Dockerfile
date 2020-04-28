FROM node:12.9.1

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm install

CMD ["npm", "run", "dev"]


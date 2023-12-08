FROM node:alpine

WORKDIR /usr/gkh

COPY package*.json ./

RUN npm ci

COPY . .

COPY .env .env

EXPOSE 8000

CMD ["npm", "start"]

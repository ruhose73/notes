FROM node:12

WORKDIR /authservice

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "server"]
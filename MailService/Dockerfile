FROM node:12

WORKDIR /mailservice

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "server"]
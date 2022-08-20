FROM node:12

WORKDIR /noteservice

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "server"]
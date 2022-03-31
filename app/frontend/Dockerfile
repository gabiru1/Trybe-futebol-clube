# FROM node:16-alpine
FROM node:16-alpine

WORKDIR /app/frontend

COPY package* ./

RUN npm install

COPY . .

ENTRYPOINT ["npm", "start"]
#  Rafael Maltez (nao sobrescrever o comando)

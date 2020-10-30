FROM node:14

RUN mkdir -p /app/auth-ts-api

WORKDIR /app/auth-ts-api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]

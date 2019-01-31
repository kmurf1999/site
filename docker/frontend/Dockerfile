FROM node:8

WORKDIR /usr/src/frontend

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD ["npm", "run", "start"]

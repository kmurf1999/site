FROM node:8

WORKDIR /usr/src/backend

COPY package*.json ./

RUN npm install --only=production

COPY . .

ENV NODE_ENV production

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start"]

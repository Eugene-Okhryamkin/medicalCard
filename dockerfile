FROM node:12

WORKDIR /usr/app/

COPY package*.json /usr/app/ 

RUN npm install

COPY . /usr/app/

RUN npm install --prefix client 

RUN npm rebuild node-sass --prefix client

RUN npm run client:build 

EXPOSE 3000

CMD ["npm", "start"]


FROM node

WORKDIR /home/alessandro/Documento/Developer/Typescript/API Cars

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]
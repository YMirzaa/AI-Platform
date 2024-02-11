FROM node:18-alpine
# Inside the container directory 
WORKDIR /app 

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]

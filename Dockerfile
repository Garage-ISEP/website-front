#base-image
FROM node:16-alpine

RUN mkdir /app/
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]


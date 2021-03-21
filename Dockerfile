FROM node:15.11.0-alpine3.10
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./ yarn.lock ./
RUN npm install
COPY . ./
CMD ["npm", "start"]

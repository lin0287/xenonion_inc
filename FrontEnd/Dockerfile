FROM node:21-alpine3.18
WORKDIR /FrontEnd
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]

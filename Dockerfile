FROM node:slim
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
ENV TZ Asia/Kolkata
RUN date
COPY . .
CMD npm start
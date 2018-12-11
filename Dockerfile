FROM node:7
WORKDIR /docapp
COPY package-lock.json
RUN NPM install
COPY . /app
CMD node main.json
EXPOSE 8081
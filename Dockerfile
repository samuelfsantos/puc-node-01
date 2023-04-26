FROM node:14

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY package*.json ./

COPY --chown=node:node . .

EXPOSE 3000
#EXPOSE 80
#EXPOSE 443

CMD ["npm", "start"]
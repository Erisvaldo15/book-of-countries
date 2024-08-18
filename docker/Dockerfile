FROM node:20.16

WORKDIR /var/www/frontend

RUN rm -fr node_modules

COPY ../frontend/package*.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev", "--", "--host=0.0.0.0", "--port=8000"]
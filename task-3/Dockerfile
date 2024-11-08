FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

# Expose port 5000 for the app to be accessible from outside the container
EXPOSE 5000

CMD ["serve", "-s", "build", "-l", "5000"]

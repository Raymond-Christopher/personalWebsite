# backend/project/Dockerfile

FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

RUN npm run build

CMD ["node", "dist/server.js"]

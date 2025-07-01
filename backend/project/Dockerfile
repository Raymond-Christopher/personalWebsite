# backend/project/Dockerfile

FROM node:18

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build

CMD ["node", "dist/server.js"]

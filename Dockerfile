FROM mcr.microsoft.com/playwright:v1.65.1-noble

WORKDIR /app

COPY package.json ./

ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
RUN npm install --omit=dev --no-package-lock

COPY src ./src

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "src/app.js"]

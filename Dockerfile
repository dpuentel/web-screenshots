FROM mcr.microsoft.com/playwright:v1.38.0-jammy

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json ./

ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
RUN pnpm install --prod

COPY src ./src

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "src/app.js"]


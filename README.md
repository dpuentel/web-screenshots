# Web Screenshots

You can test a demo here: [https://web-screenshot.dpuentel.com/screenshot/password-generator.dpuentel.com](https://web-screenshot.dpuentel.com/screenshot/password-generator.dpuentel.com?width=1920&height=1080)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/dpuentel/web-screenshots/tree/main)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/github/dpuentel/web-screenshots/tree/main)

## 🚀 Project Description

This project is a simple web screenshot tool. From a url, generates a screenshot of the page.

## 📝 Project Setup

* Install dependencies:

```bash
pnpm i
```

* Run the following command to download new browsers:

```bash
pnpm exec playwright install
```

* If there are missing dependencies, run one of the following commands to install them:

```bash
sudo pnpm exec playwright install-deps
```

or

```bash
sudo apt install libatk1.0-0\
  libatk-bridge2.0-0\
  libcups2\
  libatspi2.0-0\
  libxcomposite1\
  libxdamage1
```

Copy the `.env.dist` to `.env` and set the `PORT` variable to the port you want to use. If you don't set it, it will use the default port `3000`.

## 🏃‍♂️ Project Run

There are two ways to run the project:

* Run the following command to run the project in watch mode to reload the server when a file changes:

```bash
pnpm run dev
```

* Run the following command to run the project in production mode:

```bash
pnpm run start
```

## 📝 Project Usage

Once the project is running, you can use it to generate screenshots of web pages.

* The url to use is `http://localhost:3000/screenshot/{url}` where `{url}` is the url of the page you want to generate the screenshot and 3000 is the default port. If you set a different port, use that port instead of 3000.
* Can set set the viewport size using the `width` and `height` query parameters. For example, `http://localhost:3000/screenshot/{url}?width=1920&height=1080` will generate a screenshot of the page with a viewport of 1920x1080. The default viewport size is 1280x720.
* If you need to provide a url with query parameters os slashes, you need to encode them. For example, `http://localhost:3000/screenshot/https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dtest` will generate a screenshot of the page `https://www.google.com/search?q=test`.

## 🧑‍💻 Project Tech Stack

### 📦 [Playwright](https://playwright.dev/)

Playwright is a Node library to automate Chromium, Firefox and WebKit with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast.

It's used to generate the screenshots.

### 📦 [Express](https://expressjs.com/)

Fast, unopinionated, minimalist web framework for Node.js

It's used to create the server.

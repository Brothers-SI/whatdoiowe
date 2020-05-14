const express = require("express");
// const logger = require("morgan");
// const cors = require("cors");
// const bearerToken = require("express-bearer-token");
const webhooks = require("./routes/webhook");

class App {
  constructor() {
    this.server = express();
    this.isDev = process.env.NODE_ENV != "production";
    // this.server.use(cors());
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // this.server.use(bearerToken());
    this.server.use(express.json());
    // this.server.use(logger('dev'));
  }

  routes() {
    this.server.use(`/webhook/`, webhooks);
  }
}

module.exports = new App().server;

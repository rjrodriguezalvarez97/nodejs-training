import express from "express";
import rollbar from "@infra/rollbar";
import router from "@infra/express/router";
import type { ServerInterface, ServerApp } from "@infra/interfaces/ServerInterface";

export default class Server implements ServerInterface {
  private port: string;
  private app: ServerApp;
  private server: ReturnType<typeof express.application.listen> | undefined;

  constructor(port: string) {
    this.port = port;
    this.app = express();
  }

  init() {
    this.app.use(rollbar.errorHandler());
    this.app.use(express.json());

    this.app.use(router);

    this.server = this.app.listen(this.port, () => {
      console.log(`Server started listening on port: http://localhost:${this.port}`);
    });
  }

  close() {
    this.server?.close();
  }

  getApp(): ServerApp {
    return this.app;
  }
}

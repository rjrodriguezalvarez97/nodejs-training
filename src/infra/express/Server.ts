import express from "express";
import rollbar from "@infra/rollbar";
import Router from "@infra/express/Router";
import type { ServerInterface, ServerApp } from "@infra/interfaces/ServerInterface";
import type RepositoryInterface from "@infra/interfaces/RepositoryInterface";

export default class Server implements ServerInterface {
  private port: string;
  private app: ServerApp;
  private server: ReturnType<typeof express.application.listen> | undefined;
  repository: RepositoryInterface;

  constructor(port: string, repository: RepositoryInterface) {
    this.repository = repository;
    this.port = port;
    this.app = express();
  }

  init() {
    this.app.use(rollbar.errorHandler());
    this.app.use(express.json());
    const router = new Router(this.repository).init();
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

import express from "express";
import rollbar from "@infra/rollbar";
import router from "@infra/express/router";

export default class Server {
  private port: string;
  private app: express.Application;
  
  constructor(port: string) {
    this.port = port;
    this.app = express();
  }

  init() {
    this.app.use(rollbar.errorHandler());
    this.app.use(express.json());

    this.app.use(router);

    this.app.listen(this.port, () => {
      console.log(`Server started listening on port: http://localhost:${this.port}`);
    });
  }
}

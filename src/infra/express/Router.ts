import express from "express";
import RootController from "@infra/express/controllers/Root.controller";
import type RepositoryInterface from "@infra/interfaces/RepositoryInterface";
import UserRoutes from "@infra/express/routes/UserRoutes";
export default class Router {
  private repository: RepositoryInterface;
  private router = express.Router();

  constructor(repository: RepositoryInterface) {
    this.repository = repository;
  }

  init() {
    this.initRootRoutes();
    this.initUserRoutes();
    return this.router;
  }

  initUserRoutes() {
    const userRoutes = new UserRoutes(this.repository.userRepository).init();
    this.router.use("/users", userRoutes);
  }

  initRootRoutes() {
    const rootController = new RootController();

    this.router.get("/", rootController.getRoot);
    this.router.get("/json", rootController.getJson);
    this.router.get("/query", rootController.getQuery);
    this.router.get("/profile", rootController.getProfile);
  }
}

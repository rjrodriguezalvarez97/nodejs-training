import express from "express";
// import userRoutes from "@infra/express/routes/UserRoutes";
import RootController from "@infra/express/controllers/Root.controller";
import type RepositoryInterface from "@infra/interfaces/RepositoryInterface";
import UserRoutes from "@infra/express/routes/UserRoutes";
// const router = express.Router();

// define the home page route
// const rootController = new RootController();

// router.get("/", rootController.getRoot);

// router.get("/json", rootController.getJson);

// router.get("/query", rootController.getQuery);

// router.get("/profile", rootController.getProfile);

// // router.use("/users", userRoutes);

// export default router;

export default class Router {
  private repository: RepositoryInterface;
  private router = express.Router();

  constructor(repository: RepositoryInterface) {
    this.repository = repository;

    // router.use("/users", userRoutes);
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

import express from "express";
import UserController from "@infra/express/controllers/User.controller";
import type UserRepositoryInterface from "@application/user/repository/UserRepositoryInterface";

const router = express.Router();
export default class UserRoutes {
  private userController: UserController;

  constructor(userRepository: UserRepositoryInterface) {
    this.userController = new UserController(userRepository);
  }

  init() {
    router.get("/", (req, res) => this.userController.getUsers(req, res));
    router.post("/", (req, res) => this.userController.createUser(req, res));

    return router;
  }
}

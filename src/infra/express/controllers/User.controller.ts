import type UserRepositoryInterface from "@application/user/repository/UserRepositoryInterface";
import UserUseCases from "@application/user/use-cases/UserUseCases";
import type { Request, Response } from "express";

export default class UserController {
  private userUseCases: UserUseCases;

  constructor(userRepository: UserRepositoryInterface) {
    this.userUseCases = new UserUseCases(userRepository);
  }

  createUser(req: Request, res: Response) {
    const user = this.userUseCases.create(req.body);
    res.json(user);
  }

  getUsers(_req: Request, res: Response) {
    const users = this.userUseCases.getAll();
    res.json(users);
  }
}

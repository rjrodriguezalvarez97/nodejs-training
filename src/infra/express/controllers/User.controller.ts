import type { Request, Response } from "express";

export default class UserController {
  post(req: Request, res: Response) {
    res.json(req.body);
  }
}

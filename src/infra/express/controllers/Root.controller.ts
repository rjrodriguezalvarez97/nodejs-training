import type { Request, Response } from "express";

export default class RootController {
  getRoot(_req: Request, res: Response) {
    res.json({ message: "API under construction" });
  }

  getJson(_req: Request, res: Response) {
    res.json({
      name: "edgar",
      occupation: "developer"
    });
  }

  getQuery(req: Request, res: Response) {
    const { name, occupation } = req.query;
    res.json({
      name,
      occupation
    });
  }
  getProfile(_req: Request, res: Response) {
    res.redirect("/json");
  }
}

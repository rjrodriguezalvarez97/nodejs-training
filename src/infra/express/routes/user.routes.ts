import express from "express";
import UserController from "@infra/express/controllers/User.controller";
const router = express.Router();
const userController = new UserController();
router.get("/", (_req, res) => {
  res.json({ hello: "users" });
});
router.post("/", userController.post);

export default router;

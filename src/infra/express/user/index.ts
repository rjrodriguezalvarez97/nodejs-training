import express from "express";

const router = express.Router();

router.get("/", async (_req, res) => {
  res.json({ hello: "usersssss" });
});

export default router;

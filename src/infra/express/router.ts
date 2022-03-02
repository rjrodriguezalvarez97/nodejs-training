import express from "express";
import userRoutes from "@infra/express/user";
const router = express.Router();

// define the home page route
router.get("/", async (_req, res) => {
  res.json({ hello: "worddddddld" });
});

router.use("/users", userRoutes);

export default router;

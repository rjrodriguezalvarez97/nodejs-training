import express from "express";
import userRoutes from "@infra/express/routes/user";
const router = express.Router();

// define the home page route
router.get("/", (_req, res) => {
  res.json({ message: "API under construction" });
});

router.get("/json", (_req, res) => {
  res.json({
    name: "edgar",
    occupation: "developer"
  });
});

router.use("/users", userRoutes);

export default router;

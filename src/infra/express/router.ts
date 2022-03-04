import express from "express";
import userRoutes from "@infra/express/routes/user";
import RootController from "@infra/express/controllers/root/RootController";
const router = express.Router();

// define the home page route
const rootController = new RootController();

router.get("/", rootController.getRoot);

router.get("/json", rootController.getJson);

router.get("/query", rootController.getQuery);

router.get("/profile", rootController.getProfile);

router.use("/users", userRoutes);

export default router;

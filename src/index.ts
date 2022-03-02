import "dotenv/config";
import "module-alias/register";
import Server from "@infra/express";

const PORT = process.env["DEV_AND_TALENT_PORT"] || "3000";

new Server(PORT).init();

import "dotenv/config";
import "module-alias/register";
import Server from "@infra/express/Server";
import InMemoryRepository from "@infra/repositories/in-memory/InMemoryRepository";

const PORT = process.env["DEV_AND_TALENT_PORT"] || "3000";
const repository = new InMemoryRepository();
new Server(PORT, repository).init();

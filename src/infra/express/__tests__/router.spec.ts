import request from "supertest";
import type express from "express";
import Server from "@infra/express/Server";

describe("Router test suite", () => {
  let app: express.Application;
  let server: Server;

  beforeAll(() => {
    server = new Server("3004");
    server.init();
    app = server.getApp();
  });

  afterAll(() => {
    server.close();
  });

  it("Should get the homepage", async () => {
    const response = await request(app).get("/").set("Accept", "application/json");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.hello).toEqual("world");
  });

  it("Should get the homepage of users", async () => {
    const response = await request(app).get("/users").set("Accept", "application/json");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.hello).toEqual("users");
  });
});

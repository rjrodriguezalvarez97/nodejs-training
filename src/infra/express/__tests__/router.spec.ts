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

  ///// BASIC ROUTES /////
  describe("Basic routes test suite", () => {
    it("Should get / endpoint", async () => {
      const response = await request(app).get("/").set("Accept", "application/json");
      expect(response.headers["content-type"]).toMatch(/json/);
      expect(response.status).toEqual(200);
      expect(response.body.message).toEqual("API under construction");
    });

    it("Should get the /json endpoint", async () => {
      const response = await request(app).get("/json").set("Accept", "application/json");
      const expected = {
        name: "edgar",
        occupation: "developer"
      };

      expect(response.headers["content-type"]).toMatch(/json/);
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(expected);
    });
  });

  ///// USER ROUTES /////
  describe("User routes test suite", () => {
    it("Should get the /users endpoint", async () => {
      const response = await request(app).get("/users").set("Accept", "application/json");
      expect(response.headers["content-type"]).toMatch(/json/);
      expect(response.status).toEqual(200);
      expect(response.body.hello).toEqual("users");
    });
  });
});

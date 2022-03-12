import request from "supertest";
import config from "config";
import createApplication from "../src/app/create-application";
import registerErrorHandler from "../src/app/register-error-handler";
import registerMiddlewares from "../src/app/register-middlewares";
import registerRoutes from "../src/app/register-routes";

describe("Test all endpoints", () => {
  const appName: string = config.get("Application.name");

  it("Hello API Request", async () => {
    createApplication()
      .then(registerMiddlewares)
      .then(registerRoutes)
      .then(registerErrorHandler)
      .then(async (application) => {
        const result = await request(application.handler).get("/");
        expect(result.body).toEqual({
          message: `Hello World! I am ${appName}`,
        });
        expect(result.statusCode).toEqual(200);
      });
  });

  it("Hello Name Request", async () => {
    createApplication()
      .then(registerMiddlewares)
      .then(registerRoutes)
      .then(registerErrorHandler)
      .then(async (application) => {
        const result = await request(application.handler).get("/Victor");
        expect(result.body).toEqual({
          message: `Hello Victor! I am ${appName}`,
        });
        expect(result.statusCode).toEqual(200);
      });
  });

  it("Error Request", async () => {
    createApplication()
      .then(registerMiddlewares)
      .then(registerRoutes)
      .then(registerErrorHandler)
      .then(async (application) => {
        const result = await request(application.handler).get("/error");
        expect(result.body).toEqual({
          path: "/error",
          statusCode: 418,
          errorCode: "CUSTOM_ERROR_CODE",
          message: "I am a Teapot",
        });
        expect(result.statusCode).toEqual(418);
      });
  });

  it("404 Request", async () => {
    createApplication()
      .then(registerMiddlewares)
      .then(registerRoutes)
      .then(registerErrorHandler)
      .then(async (application) => {
        const result = await request(application.handler).get("/abc/404");
        expect(result.body).toEqual({
          path: "/abc/404",
          statusCode: 404,
          errorCode: "Unknown Error Code",
          message: "Not Found",
        });
        expect(result.statusCode).toEqual(404);
      });
  });
});

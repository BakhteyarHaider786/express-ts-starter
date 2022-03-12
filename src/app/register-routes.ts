import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { IApplication } from "../interfaces";
import AppError from "../errors/app-error";

// TODO add necessary routes
async function registerRoutes(application: IApplication): Promise<IApplication> {
  const { handler } = application;

  handler.get(
    "/error",
    asyncHandler(async () => {
      throw new AppError("I am a Teapot", 418, "CUSTOM_ERROR_CODE");
    })
  );

  handler.get(
    "/",
    asyncHandler(async (_: Request, response: Response) => {
      response.status(200).json({
        message: `Hello World! I am ${application.name}`,
      });
    })
  );

  handler.get(
    "/:name",
    asyncHandler(async (request: Request, response: Response) => {
      const name: string = request.params.name || "VISITOR";
      response.status(200).json({
        message: `Hello ${name}! I am ${application.name}`,
      });
    })
  );

  return application;
}

export default registerRoutes;

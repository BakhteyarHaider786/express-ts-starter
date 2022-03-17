import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { getReasonPhrase } from "http-status-codes";
import { Container } from "typedi";
import { IApplication } from "../interfaces";
import AppError from "../errors/app-error";
import ApiService from "../services/api-service";

// TODO add necessary routes
async function registerRoutes(
  application: IApplication
): Promise<IApplication> {
  const apiService = Container.get(ApiService);
  const { handler } = application;

  handler.get(
    "/",
    asyncHandler(async (_: Request, response: Response) => {
      const message = apiService.sayHello(application.name);
      response.status(200).json(message);
    })
  );

  handler.get(
    "/:name",
    asyncHandler(async (request: Request, response: Response) => {
      const { name } = request.params;
      const message = apiService.sayHello(application.name, name);
      response.status(200).json(message);
    })
  );

  handler.get(
    "/error/:code",
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    asyncHandler(async (request: Request, _: Response) => {
      const code = Number(request.params.code || 500);
      throw new AppError(getReasonPhrase(code), code, "Custom Error Code");
    })
  );

  return application;
}

export default registerRoutes;

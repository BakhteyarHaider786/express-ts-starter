import express from "express";
import cors from "cors";
import { IApplication } from "../interfaces";

// TODO add necessary middlewares
async function registerMiddlewares(application: IApplication): Promise<IApplication> {
  const { handler } = application;

  handler.use(express.urlencoded({ extended: true }));
  handler.use(express.json());
  handler.use(cors());

  return application;
}

export default registerMiddlewares;

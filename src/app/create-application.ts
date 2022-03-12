import express from "express";
import config from "config";
import { IApplication } from "../interfaces";

// TODO find better loading strategy
const port = Number(process.env.PORT || 8080);
const name: string = config.get("Application.name");

async function createApplication(): Promise<IApplication> {
  const handler = express();

  return { handler, port, name };
}

export default createApplication;

import { Application } from "express";
import { Server } from "http";

export default interface IApplication {
  handler: Application;
  server?: Server;
  name: string;
  port: number;
}

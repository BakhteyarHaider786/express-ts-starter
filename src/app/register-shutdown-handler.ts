import { IApplication } from "../interfaces";

async function registerShutdownHandler(application: IApplication): Promise<IApplication> {
  if (!application.server) {
    throw new Error("application server was not created!");
  }

  process.on("SIGINT", () => {
    console.log("closing server");

    application.server?.close(() => {
      console.log("server closed.");

      process.exit(0);
    });
  });

  return application;
}

export default registerShutdownHandler;

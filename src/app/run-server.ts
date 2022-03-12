import { IApplication } from "../interfaces";

async function runServer(application: IApplication): Promise<IApplication> {
  if (!application.server) {
    throw new Error("application server was not created!");
  }

  console.log(`started server at http://localhost:${application.port}`);
  application.server?.listen(application.port);

  return application;
}

export default runServer;

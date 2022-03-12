import createApplication from "./app/create-application";
import createServer from "./app/create-server";
import registerErrorHandler from "./app/register-error-handler";
import registerMiddlewares from "./app/register-middlewares";
import registerRoutes from "./app/register-routes";
import registerShutdownHandler from "./app/register-shutdown-handler";
import runServer from "./app/run-server";

if (require.main === module) {
  createApplication()
    .then(registerMiddlewares)
    .then(registerRoutes)
    .then(registerErrorHandler)
    .then(createServer)
    .then(registerShutdownHandler)
    .then(runServer)
    .catch((error: Error) => {
      console.error(error.message);
      process.exit(1);
    });
}

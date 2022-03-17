import { Request, Response, NextFunction } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { IError, IApplication } from "../interfaces";

// TODO add specific error handler
async function registerErrorHandler(
	application: IApplication
): Promise<IApplication> {
	const { handler } = application;

	handler.use((_: Request, __: Response, next: NextFunction) => {
		return next({
			statusCode: StatusCodes.NOT_FOUND,
			message: ReasonPhrases.NOT_FOUND,
		});
	});

	handler.use(
		(
			error: IError,
			request: Request,
			response: Response,
			next: NextFunction
		) => {
			const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
			const errorCode = error.errorCode || "No Error Code";
			const message = error.message || ReasonPhrases.INTERNAL_SERVER_ERROR;

			response.status(statusCode).json({
				path: request.path,
				statusCode,
				errorCode,
				message,
			});

			return next();
		}
	);

	return application;
}

export default registerErrorHandler;

import { StatusCodes } from "http-status-codes";
import { IError } from "../interfaces";

export default class AppError extends Error implements IError {
	statusCode: number;

	errorCode: string;

	constructor(message: string, statusCode?: number, errorCode?: string) {
		super(message);
		this.statusCode = statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
		this.errorCode = errorCode || "Unknown AppError Code";
	}
}

import http from "http";
import httpClose from "http-close";
import { IApplication } from "../interfaces";

async function createServer(application: IApplication): Promise<IApplication> {
	const server = http.createServer(application.handler);

	// TODO find optimal timeout for httpClose
	httpClose({ timeout: 5000 }, server);

	return { ...application, server };
}

export default createServer;

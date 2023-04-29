import express, { Express, NextFunction, Response } from "express";
import dotenv from "dotenv"
import http from "http"

import statesRouter from "./routes/states.routes";

interface appUseProps{
	res: Response;
	next: NextFunction;
}

const app: Express = express();

dotenv.config();

app.use(({res, next}: appUseProps) => {
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Content-Type,x-token, x-refresh-token"
	);
	res.setHeader("Access-Control-Allow-Origin","*");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Expose-Headers", "x-token, x-refresh-token");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, DELETE"
	);
	next();
});

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.get("/",(req,res)=>{
	res.send("Server Health Good");
});

app.use("/states", statesRouter);

// Normalize a port into a number, string, or false.
const normalizePort = (val: string) => {
	const port = parseInt(val, 10);
	if (isNaN(port)) {
		return val;
	}
	if (port >= 0) {
		return port;
	}
	return false;
}

const onListening = () => {
	const addr = server.address();
	const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr?.port;
}

// Event listener for HTTP server "error" event.
const onError = (error: NodeJS.ErrnoException) => {
	if (error.syscall !== "listen") {
		throw error;
	}
	var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case "EACCES":
			console.error(bind + " requires elevated privileges");
			process.exit(1);
			break;
		case "EADDRINUSE":
			console.error(bind + " is already in use");
			process.exit(1);
			break;
		default:
			throw error;
	}
}

const port = normalizePort(process.env.PORT || "5555");
app.set("port", port);
console.log(`[PORT]: http://localhost:${port}`);

const server = http.createServer(app);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

module.exports = app;
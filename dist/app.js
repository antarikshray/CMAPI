"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const states_routes_1 = __importDefault(require("./routes/states.routes"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(({ res, next }) => {
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,x-token, x-refresh-token");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Expose-Headers", "x-token, x-refresh-token");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.get("/", (req, res) => {
    res.send("Server Health Good");
});
app.use("/states", states_routes_1.default);
// Normalize a port into a number, string, or false.
const normalizePort = (val) => {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + (addr === null || addr === void 0 ? void 0 : addr.port);
};
// Event listener for HTTP server "error" event.
const onError = (error) => {
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
};
const port = normalizePort(process.env.PORT || "5555");
app.set("port", port);
console.log(`[PORT]: http://localhost:${port}`);
const server = http_1.default.createServer(app);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
module.exports = app;

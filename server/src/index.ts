import Koa from "koa";
import bodyParser from "koa-bodyparser";
import Router from "koa-router";
import logger from "koa-logger";

import { user } from "./routes";

const app = new Koa();
const router = new Router();
const PORT = 3001;

// Middleware
app.use(bodyParser());
app.use(logger());

// Routes
app.use(bodyParser());
app.use(router.allowedMethods());
app.use(user.routes());

// Server
const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default server;

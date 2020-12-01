import Koa from "koa";
import bodyParser from "koa-bodyparser";
import Router from "koa-router";
import logger from "koa-logger";
import session from "koa-session";
import passport from "koa-passport";

import { errorHandler } from "./middlewares";
import { user, auth } from "./routes";

const app = new Koa();
const router = new Router();
const PORT = 3001;

// Sessions
/**
 * To generate secure key:
 * $ python3
    >> import os
    >> os.urandom(24)
    b'3\xa5\xfa\xc6\xfb\x0e\x1dA\x19-U\x15Y\x9e2]\x92/\x97\x8d\xecsJ\xb7'
 */
app.keys = ["super-secret-key"];
app.use(session(app));

// Middleware
app.use(errorHandler);
app.use(logger());

// Authentication
require("./auth");
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(bodyParser());
app.use(router.allowedMethods());
app.use(user.routes());
app.use(auth.routes());

// Server
const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default server;

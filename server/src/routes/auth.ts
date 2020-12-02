import Router from "koa-router";
import passport from "koa-passport";
import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

import User from "../models/User";

const router = new Router();

router.get(`/register`, async (ctx: any) => {
  ctx.type = "html";
  ctx.body = fs.createReadStream(
    path.join(__dirname, "../views/register.html")
  );
});

router.post(`/register`, async (ctx: any) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(ctx.request.body.password, salt);

  const user = await User.create({
    username: ctx.request.body.username,
    password: hash,
  });

  if (user) {
    ctx.login(user);
    ctx.redirect(`/status`);
  } else {
    ctx.status = 404;
    ctx.body = { status: "error" };
  }
});

router.get(`/status`, async (ctx: any) => {
  if (ctx.isAuthenticated()) {
    ctx.type = "html";
    ctx.body = fs.createReadStream(
      path.join(__dirname, "../views/status.html")
    );
  } else {
    ctx.redirect(`/register`);
  }
});

router.get(`/login`, async (ctx: any) => {
  if (!ctx.isAuthenticated()) {
    ctx.type = "html";
    ctx.body = fs.createReadStream(path.join(__dirname, "../views/login.html"));
  } else {
    ctx.redirect(`/status`);
  }
});

router.post(`/login`, passport.authenticate("local"), (ctx) => {
  ctx.body = {
    status: 200,
    message: "success",
  };
});

router.get(`/logout`, async (ctx: any) => {
  if (ctx.isAuthenticated()) {
    ctx.logout();
    ctx.redirect(`/login`);
  } else {
    ctx.body = { success: false };
    ctx.throw(401);
  }
});

export default router;

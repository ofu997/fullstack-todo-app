import Router from "koa-router";

import User from "../models/User";

const router = new Router();
const BASE_URL = "/api/users";

router.get(`${BASE_URL}/test`, async (ctx: any) => {
  try {
    const users = await User.findAll();
    console.log(users);
  } catch (err) {
    console.log(err);
  }

  ctx.status = 200;
  ctx.body = {
    status: "success",
    data: "Hello World",
  };
});

export default router;

import Router from "koa-router";

import User from "../models/User";

const router = new Router();
const BASE_URL = "/api/users";

router.get(`${BASE_URL}`, async (ctx: any) => {
  try {
    const users = await User.findAll();
    ctx.status = 200;
    ctx.body = {
      status: "success",
      data: users,
    };
    console.log(users);
  } catch (err) {
    console.log(err);
  }
});

export default router;

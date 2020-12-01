import Router from "koa-router";

const router = new Router();
const BASE_URL = "/api";

router.get(`${BASE_URL}`, async (ctx: any) => {
  ctx.status = 200;
  ctx.body = {
    status: "success",
    data: "Hello World",
  };
});

export default router;

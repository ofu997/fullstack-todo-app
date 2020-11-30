import Koa from "koa";
import bodyParser from "koa-bodyparser";

const app = new Koa();
const PORT = 3001;

// Routes
app.use(bodyParser());

// Server
const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default server;

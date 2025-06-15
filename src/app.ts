import express from "express";
import "express-async-errors";
import { errorHandling } from "./middlewares/error-handling";
import indexRoute from "./routes";
const app = express();

app.use(express.json());

app.use(indexRoute);
app.use("/", (resquest, response) => {
  response.status(200).json({
    status: "ok",
  });
});
app.use(errorHandling);

export default app;

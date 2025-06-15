import { Router } from "express";
import routerUser from "./routerUsers";

const indexRoute = Router();

indexRoute.use("/users",routerUser);

export default indexRoute;

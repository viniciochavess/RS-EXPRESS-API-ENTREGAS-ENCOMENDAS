import { Request, Response, Router } from "express";
import { UserController } from "../http/UserController";

const routerUser = Router();
const userController = new UserController();
routerUser.get("", (request: Request, response: Response) => {
  const res = userController.list(request, response);
  response.status(200).send(res);
});

export default routerUser;

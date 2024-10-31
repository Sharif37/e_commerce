// /logInRouter.ts
import express, { RouterOptions,RequestHandler } from "express";
import { loginUser } from "../controllers/loginController";
import { requireRole } from "./auth/auth";
import { Roles } from "./auth/roles";

const routerOptions: RouterOptions = {
  caseSensitive: true,
};
const logInRouter = express.Router(routerOptions);

logInRouter.post("/user", loginUser);

export default logInRouter;

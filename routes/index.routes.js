import { Router } from "express";
import authRouter from "./auth.routes.js";
import routerProducto from "./producto.routes.js";

const route= Router();

route.use("/producto", routerProducto)
route.use("/auth", authRouter)

export default route;

import { Router } from "express";
import productoController from "../controllers/producto.controller.js";
import { validate } from "../middleware/validator.middleware.js";
import { postProductoValidator } from "../validators/producto.validator.js";

const routerProducto= Router();

routerProducto.get("/",productoController.getProducto);
routerProducto.get("/:id",productoController.getProductoUnico);
routerProducto.post("/", validate(postProductoValidator),productoController.postProducto);
routerProducto.put("/:id", productoController.updateProducto);


export default routerProducto;
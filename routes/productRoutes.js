import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

//routes

//crear producto
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//actualizar producto
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//obtener productos
router.get("/get-product", getProductController);

//obtener producto unitario
router.get("/get-product/:slug", getSingleProductController);

//obtener foto del producto
router.get("/product-photo/:pid", productPhotoController);

//eliminar producto
router.delete("/delete-product/:pid", deleteProductController);

//Filtrar producto

router.post("/product-filters", productFiltersController);

//productos cuenta
router.get("/product-count", productCountController);

//productos por página
router.get("/product-list/:page", productListController);

//buscador de productos
router.get("/search/:keyword", searchProductController);

//productos similares
router.get("/related-products/:pid/:cid", relatedProductController);


export default router;

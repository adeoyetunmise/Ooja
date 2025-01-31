import {Router} from "express"
import authenticate from "../middleware/authenticate.js"
import { getMyProducts, getProduct, getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js"
import upload from '../middleware/multer.js'


const productRoute = Router()

productRoute.get("/", authenticate, getProducts)

productRoute.get("/:_id",authenticate, getProduct)

productRoute.get("/myproducts", authenticate, getMyProducts)

productRoute.post("/" , authenticate, upload.single('image'), createProduct)

productRoute.patch("/:_id", authenticate, upload.single('image'), updateProduct)

productRoute.delete("/:_id", authenticate, deleteProduct)

export default productRoute



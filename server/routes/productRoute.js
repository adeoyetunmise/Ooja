import {Router} from "express"
import authenticate from "../middleware/authenticate.js"
import { getMyProducts, getProduct, getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js"
import upload from '../middleware/multer.js'


const productRoute = Router()

productRoute.get("/", authenticate, getProducts)

productRoute.get("/:id",authenticate, getProduct)

productRoute.get("/myproducts", authenticate, getMyProducts)

productRoute.post("/" , authenticate, upload.single('image'), createProduct)

productRoute.patch("/:id", authenticate, upload.single('image'), updateProduct)

productRoute.delete("/:id", authenticate, upload.single('image'), deleteProduct)

export default productRoute



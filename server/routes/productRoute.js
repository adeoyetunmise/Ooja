import {Router} from "express"




const productRouter = Router()

productRouter.post("/addProduct", addProduct)
productRouter.get("/getAllProduct", allProduct)
productRouter.get("/getSingleProduct", singleProduct)
productRouter.patch("/updateProduct", updateProduct)
productRouter.delete("/deleteProduct", deleteProduct)



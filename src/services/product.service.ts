import axios from "axios";

// PRODUCT SERVICE
export const getProducts = () => axios.get("/Product/products");
export const deleteProduct = (productId:string) => axios.delete('/Product/product/' + productId) // prettier-ignore
export const saveProduct = (product:any) => axios.post('/Product/product', product) // prettier-ignore

//CATEGORY SERVICE
export const getCategories = () => axios.get("/Category/categories");

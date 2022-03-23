import axios from "axios";

// PRODUCT SERVICE
export const getProducts = () => axios.get("/Product/products");
export const deleteProduct = (productId:string) => axios.delete('/Product/product/' + productId) // prettier-ignore

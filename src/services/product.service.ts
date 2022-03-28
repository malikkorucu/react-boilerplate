import axios from "axios";

// PRODUCT SERVICE
export const getProducts = () => axios.get("/Product/products");
export const deleteProducts = (productIds: Array<string>) => axios.delete('/Product/product' , {params: { productIds }}) // prettier-ignore
export const saveProduct = (product:any) => axios.post('/Product/product', product) // prettier-ignore
export const updateProduct = (productId:string, product:any) => axios.put('/Product/product/'+ productId, product) // prettier-ignore

//CATEGORY SERVICE
export const getCategories = () => axios.get("/Category/categories");

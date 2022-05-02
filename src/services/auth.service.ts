import axios from "axios";

export const login = (body: any) => axios.post("/Auth/login", body);
export const getUsers = () => axios.get('/Auth/getUsers');

import axios from "axios";

export const login = (body: any) => axios.post("/Auth/login", body);

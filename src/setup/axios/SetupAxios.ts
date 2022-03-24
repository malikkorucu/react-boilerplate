import { toast } from "react-toastify";

const DEV = false;
export const BASE_URL = DEV
  ? "http://localhost:8080/"
  : "https://bc-e-commerce-api.herokuapp.com/";
const API_URL = BASE_URL + "api/";

export default function setupAxios(axios: any, store: any) {
  axios.defaults.headers.Accept = "application/json";
  axios.defaults.baseURL = API_URL;

  axios.interceptors.request.use(
    (config: any) => {
      const {  auth: { accessToken } } = store.getState(); // prettier-ignore

      if (accessToken) {
        config.headers.Authorization = "Bearer " + accessToken;
      }

      return config;
    },
    (err: any) => {}
  );
  axios.interceptors.response.use(
    (response: any) => {
      if (!response.data.status) {
        toast.error(response.data.message);
      }
      return response.data;
    },
    (err: any) => {
      return err.response;
    }
  );
}

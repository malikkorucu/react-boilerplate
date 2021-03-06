import { toast } from "react-toastify";
import { actions } from "../../redux/auth/auth.redux";

const DEV = process.env.NODE_ENV === "development";
export const BASE_URL = DEV
  ? "http://localhost:8080/"
  : "https://bc-e-commerce-api.herokuapp.com/";
const API_URL = BASE_URL + "api/";

export const IMAGE_URL =
  "https://bcecommerce.s3.us-east-2.amazonaws.com/";

export default function setupAxios(axios: any, store: any) {
  axios.defaults.headers.Accept = "application/json";
  axios.defaults.baseURL = API_URL;

  axios.interceptors.request.use(
    (config: any) => {
      const { auth: { accessToken } } = store.getState(); // prettier-ignore

      if (accessToken) {
        config.headers.Authorization = "Bearer " + accessToken;
      }

      return config;
    },
    (err: any) => { }
  );
  axios.interceptors.response.use(
    (response: any) => {
      return response.data;
    },
    (err: any) => {
      if (err?.response?.data?.code === 401) {
        store.dispatch(actions.logout())
      }
      toast.error(err?.response?.data?.message);
      return err.response.message;
    }
  );
}

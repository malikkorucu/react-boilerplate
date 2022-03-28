import { toast } from "react-toastify";
import { actions } from "../../redux/auth/auth.redux";

const DEV = process.env.NODE_ENV === "development";
export const BASE_URL = DEV
  ? "http://localhost:8080/"
  : "https://bc-e-commerce-api.herokuapp.com/";
const API_URL = BASE_URL + "api/";

export const IMAGE_URL =
  "https://bcecommercebucket.s3.us-east-2.amazonaws.com/";

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
      if (response.data.code === 401) {
        store.dispatch(actions.logout())
      }
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

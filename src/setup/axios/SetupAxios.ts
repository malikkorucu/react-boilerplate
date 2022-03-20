import { toast } from "react-toastify";

export default function setupAxios(axios: any, store: any) {
  axios.defaults.headers.Accept = "application/json";
  axios.defaults.baseURL = "https://bc-e-commerce-api.herokuapp.com/api/";

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
      return response.data.data;
    },
    (err: any) => {
      return err.response;
    }
  );
}

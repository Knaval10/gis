import axios from "axios";
export const BASE_URL = import.meta.env.VITE_APP_BACKEND_URL;
const https = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
});

export const getApi = (url: string, params = {}) => {
  return https
    .get(url, { headers: { "Content-Type": "application/json" }, params })
    .then((res) => res.data)
    .catch((err) => {
      console.log("Request Error", err);
    });
};

import axios from "axios";

const http = axios.create({
  baseURL: "https://admin.dobroseptik.ru/api/v1",
});
http.interceptors.request.use(
  (config) => {
    config.headers[
      "Authorization"
    ] = `Token b54f02f46e52cd1f451efa07208c66a0181d7a6d`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default http;

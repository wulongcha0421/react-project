import axios from "axios";

export const service = axios.create({});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error("Error:", error.message);
    return Promise.reject(new Error(error.message));
  }
);

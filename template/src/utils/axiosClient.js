import axios from "axios";
import { toast } from "react-toastify";
import userManager from "./userManager";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use( async(config) => {
  const user = await userManager.getUser();

  if (user?.access_token) {
    config.headers.Authorization = `Bearer ${user.access_token}`;
  }

  return config;
});

// declare a response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // do something with the response data
    return response?.data;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 400 || error.response.status === 403) {
        console.log({ ...error });
      }
    } else {
      toast.error("Error: Unexpected error occurred.");
    }

    return Promise.reject(error);
  }
);

export default axiosClient;

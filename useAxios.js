import axios from "axios";
import { useContext } from "react";
import AppContext from "./AppContext";

const useAxios = (config = {}) => {
  const { authToken, storeToken, showMessage } = useContext(AppContext);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  Object.assign(headers, config);
  const defaultConfig = {
    baseURL: "http://54.71.18.74:3591/api/",
    ...config,
    timeout: config.timeout || 100000,
    headers,
  };
  if (authToken) {
    defaultConfig.headers["Authorization"] = `Bearer ${authToken}`;
  }
  const axiosInstance = axios.create(defaultConfig);
  axiosInstance.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      console.error("api error", err);
      // if (err.response.status === 401) {
      //   storeToken(null);
      //   showMessage("Please login again");
      //   // TODO: navigate to login
      // }
      throw err;
    }
  );
  return axiosInstance;
};

export default useAxios;

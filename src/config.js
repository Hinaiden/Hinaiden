import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://aidenblog123.herokuapp.com/api/",
});

export default axiosInstance;

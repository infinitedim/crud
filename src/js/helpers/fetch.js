import axios from "redaxios";
import config from "../config";

const createInstance = axios.create({
  baseURL: config.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default createInstance;

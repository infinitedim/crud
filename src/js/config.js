import Storage from "./helpers/storage";

const config = {
  // Api base url
  apiUrl: "http://159.223.57.121:8080",
  token: Storage.get("token") || null,
};

export default config;

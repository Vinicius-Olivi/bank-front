import axios from "axios";

// const urlApi = process.env.REACT_APP_API;
// console.log(process.env);
const urlApi = "http://localhost:3232/v1";

// const urlApi = "https://projeto-02-backend.herokuapp.com/v1";

const http = axios.create({
  baseURL: urlApi,
});

http.defaults.headers["content-type"] = "application/json";

export default http;

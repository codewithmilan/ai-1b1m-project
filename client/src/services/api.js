import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-1b1m-project.onrender.com/api",
});

export default API;

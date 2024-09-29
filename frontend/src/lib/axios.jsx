import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/products/",
  headers: {
    "Content-Type": "application/json",
    timeout: 1000,
  },
});

export default instance;

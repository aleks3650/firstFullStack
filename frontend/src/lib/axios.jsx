import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://firstfullstack-pv32.onrender.com"
      : "http://localhost:5000/api/products/",
  headers: {
    "Content-Type": "application/json",
    timeout: 1000,
  },
});

export default instance;

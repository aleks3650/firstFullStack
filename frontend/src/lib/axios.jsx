import axios from "axios";

const instance = axios.create({
  baseURL: "https://firstfullstack-pv32.onrender.com/",
  headers: {
    "Content-Type": "application/json",
    timeout: 1000,
  },
});

export default instance;

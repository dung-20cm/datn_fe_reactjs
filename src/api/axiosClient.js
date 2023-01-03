import axios from "axios";
const axiosClient = axios.create({
  baseURL: "http://localhost:3006/api",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(),
});

if (localStorage.getItem("accessToken")) {
  axiosClient.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("accessToken");
}

export default axiosClient;

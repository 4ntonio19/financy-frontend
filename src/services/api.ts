import axios from "axios";
const url = import.meta.env.VITE_BACKEND_API_URL as string;

const api = axios.create({
  baseURL: url,
});

export default api;

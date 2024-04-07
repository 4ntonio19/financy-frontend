import axios, { AxiosError, AxiosResponse } from "axios";
const url = import.meta.env.VITE_BACKEND_API_URL as string;

const api = axios.create({
  baseURL: url,
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      alert(
        "Seu token expirou, você será redirecionado para a tela de início."
      );
      localStorage.clear();
      window.location.href = "/";
    }
  }
);

export default api;

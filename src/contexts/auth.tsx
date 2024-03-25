import React, { createContext, useState } from "react";
import api from "../services/api";
import { AuthContextData, UserSesionObject } from "../types/session";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const [user, setUser] = useState<UserSesionObject | undefined>(undefined);
  const navigate = useNavigate();

  const Login = async (email: string, password: string) => {
    try {
      const response = await api.post("auth/session", {
        email,
        password,
      });
      setUser(response.data);

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({ id: response.data.id, name: response.data.name })
      );
      alert("Login efetuado com sucesso.");
      navigate("/home");
    } catch (error) {
      let message = "";
      if (error instanceof AxiosError) {
        message =
          error.status == 404
            ? "Usuário não encontrado"
            : "Erro ao fazer login.";
      }
      message = "Erro ao fazer login.";
      alert(message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, Login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

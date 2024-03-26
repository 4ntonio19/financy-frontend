export interface AuthContextData {
  user: UserSesionObject | undefined;
  login(email: string, password: string): Promise<void>;
  logout(): void;
}

export interface UserSesionObject {
  id: string;
  name: string;
  email: string;
  token: string;
}

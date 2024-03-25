export interface AuthContextData {
  user: UserSesionObject | undefined;
  Login(email: string, password: string): Promise<void>;
}

export interface UserSesionObject {
  id: string;
  name: string;
  email: string;
  token: string;
}

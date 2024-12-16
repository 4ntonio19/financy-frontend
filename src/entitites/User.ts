export interface IUserCredentials {
  email: string
  password: string
}

export interface IUser {
  userId: string
  firstName: string
}

export interface UserRequestBody {
  firstName: string
  lastName: string
  email: string
  password: string
}

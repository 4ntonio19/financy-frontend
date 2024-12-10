import { IUser } from "./User"

export type ISessionResponse = {
    token: string
    user: IUser
}
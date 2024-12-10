import { IParseCategory } from "./Category"

export interface ITransaction {
    id: string
    title: string
    date: string
    value: number
    type: boolean
    category: IParseCategory
}


export type TransactionDto = {
    title: string
    date: string
    value: number
    type: boolean
    categoryId: string
}
export type EditTransactionDto = {
    id: string
    title: string
    date: string
    value: number
    type: boolean
    categoryId: string
}
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
    category_id: string
    user_id: string
}
export interface ICategory {
    id: string
    title: string
    color: string
    icon: string
    type: boolean
    percentage: string 
    totalValue: number
}

export interface IParseCategory {
    id: string
    title: string
    color: string
}
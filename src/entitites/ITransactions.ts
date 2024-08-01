export interface ITransaction {
    id?: string
    title: string
    category: IParseCategory
    date: string
    transaction_value: number
    type: boolean
}
export interface ICategory {
    id: string
    name: string
    color: string
    icon: string
    percentage: string | number
}

export interface IParseCategory {
    id: string
    name: string
    color: string
}
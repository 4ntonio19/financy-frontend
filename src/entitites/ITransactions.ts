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
    title: string
    color: string
    icon: string
    percentage: string 
    totalValue: number
}

export interface IParseCategory {
    id: string
    name: string
    color: string
}
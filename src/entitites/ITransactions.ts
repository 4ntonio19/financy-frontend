export interface ITransaction {
    title: string
    category: ICategory
    date: string
    value: number
    type: boolean
}

export interface ICategory {
    name: string
    color: string
    icon: string
    percentage: string | number
}
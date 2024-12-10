export interface ICategory {
    id: string
    title: string
    color: string
    icon: string
    type: boolean
    percentage: string 
    totalValue: number
}

export interface ICategoryChart {
    id: string
    label: string
    value: number
    color: string
    icon: string
    spent: number
}


export interface IParseCategory {
    id: string
    title: string
    color: string
}
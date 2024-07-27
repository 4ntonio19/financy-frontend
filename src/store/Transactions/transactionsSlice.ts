import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICategory, ITransaction } from "../../entitites/ITransactions"
import { RootState } from "../store"

type TransactionsState = {
  transactions: ITransaction[]
  categories: ICategory[]
}
const initialState: TransactionsState = {
  transactions: [
    {
      title: "Salário",
      category: {
        icon: "fa-solid fa-credit-card",
        name: "Pagamentos",
        percentage: 57.3,
        color: "#000000",
      },
      date: "2024/07/25",
      value: 2000.0,
      type: true,
    },
    {
      title: "Padaria X",
      category: {
        icon: "fa-solid fa-credit-card",
        name: "Cartão de crédito",
        percentage: 57.3,
        color: "#F04438",
      },
      date: "2024/07/19",
      value: -9.9,
      type: false,
    },
    {
      title: "Conta de luz",
      category: {
        icon: "fa-solid fa-house",
        name: "Casa",
        percentage: 15.52,
        color: "#9E77ED",
      },
      date: "2024/07/20",
      value: -120.0,
      type: false,
    },
    {
      title: "Pagamento da fatura",
      category: {
        icon: "fa-solid fa-credit-card",
        name: "Cartão de crédito",
        percentage: 57.3,
        color: "#F04438",
      },
      date: "2024/07/21",
      value: -500.0,
      type: false,
    },
    {
      title: "Passagem de ônibus",
      category: {
        icon: "fa-solid fa-bus",
        name: "Transporte",
        percentage: 1.2,
        color: "#0BA5EC",
      },
      date: "2024/07/22",
      value: -3.5,
      type: false,
    },
    {
      title: "Restaurante Y",
      category: {
        icon: "fa-solid fa-credit-card",
        name: "Cartão de crédito",
        percentage: 57.3,
        color: "#F04438",
      },
      date: "2024/07/23",
      value: -25.0,
      type: false,
    },
    {
      title: "Supermercado Z",
      category: {
        icon: "fa-solid fa-cart-shopping",
        name: "Compras",
        percentage: 21.19,
        color: "#4E5BA6",
      },
      date: "2024/07/24",
      value: -75.0,
      type: false,
    },
    {
      title: "Farmácia ABC",
      category: {
        icon: "fa-solid fa-house",
        name: "Casa",
        percentage: 15.52,
        color: "#9E77ED",
      },
      date: "2024/07/25",
      value: -15.5,
      type: false,
    },
  ],
  categories: [
    {
      icon: "fa-solid fa-house",
      name: "Casa",
      percentage: 15.52,
      color: "#9E77ED",
    },
    {
      icon: "fa-solid fa-credit-card",
      name: "Cartão de crédito",
      percentage: 57.3,
      color: "#F04438",
    },
    {
      icon: "fa-solid fa-bus",
      name: "Transporte",
      percentage: 1.2,
      color: "#0BA5EC",
    },
    {
      icon: "fa-solid fa-burger",
      name: "Alimentação",
      percentage: 4.69,
      color: "#17B26A",
    },
    {
      icon: "fa-solid fa-cart-shopping",
      name: "Compras",
      percentage: 21.19,
      color: "#4E5BA6",
    },
  ],
}

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, { payload }: PayloadAction<ITransaction>) => {
      state.transactions.push(payload)
    },
  },
})

export const { addTransaction } = transactionsSlice.actions

export const selectTransactions = (state: RootState) =>
  state.transactions.transactions
export const selectCategories = (state: RootState) =>
  state.transactions.categories

export default transactionsSlice.reducer

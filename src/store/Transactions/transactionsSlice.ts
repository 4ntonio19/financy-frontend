import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICategory, ITransaction } from "../../entitites/Transaction"
import { RootState } from "../store"

type TransactionsState = {
  transactions: ITransaction[]
  categories: ICategory[]
}
const initialState: TransactionsState = {
  transactions: [],
  categories: []
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

import { configureStore } from "@reduxjs/toolkit"
import transactionsReducer from "./Transactions/transactionsSlice"
import dateFilterReducer from './dateFilterSlice'
import { api } from "../services/api"

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    transactions: transactionsReducer,
    dateFilter: dateFilterReducer
  },
  middleware: (getDefaulMiddleware) =>
    getDefaulMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

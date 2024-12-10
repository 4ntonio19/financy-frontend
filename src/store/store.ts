import { configureStore } from "@reduxjs/toolkit"
import transactionsReducer from "./Transactions/transactionsSlice"
import dateFilterReducer from './dateFilterSlice'
import { api } from "../services/api"
import  authSlice  from "./auth/authSlice"
import { handleApiError } from "../utils/middleware/handleError"

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    transactions: transactionsReducer,
    dateFilter: dateFilterReducer,
    auth: authSlice
  },
  middleware: (getDefaulMiddleware) =>
    getDefaulMiddleware().concat(api.middleware, handleApiError)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

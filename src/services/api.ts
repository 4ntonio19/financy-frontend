import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ICategory, ITransaction } from "../entitites/ITransactions"
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["transactions"],
  endpoints: (builder) => ({
    getTransactions: builder.query<ITransaction[], void>({
      query: () => "/transactions",
      transformResponse: (response: ITransaction[]) => response.reverse(),
      providesTags: ["transactions"],
    }),
    getCategories: builder.query<ICategory[], void>({
      query: () => "/categories",
    }),
    addTransaction: builder.mutation<ITransaction, ITransaction>({
      query: (transaction) => ({
        url: "/transactions",
        method: "POST",
        body: transaction,
      }),
      invalidatesTags: ["transactions"],
    }),
  }),
})

export const {
  useGetTransactionsQuery,
  useGetCategoriesQuery,
  useAddTransactionMutation,
} = api

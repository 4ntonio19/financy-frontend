import { EditTransactionDto, ITransaction, TransactionDto } from "../entitites/Transaction"
import { api } from "./api"
type GetTransactionsParams = {
  startDate: string
  endDate: string
}

const TransactionService = api.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<ITransaction[], GetTransactionsParams>({
      query: ({ startDate, endDate }: GetTransactionsParams) =>
        `/transactions?startDate=${startDate}&endDate=${endDate}`,
      providesTags:['Transaction']
    }),
    addTransaction: builder.mutation<string, TransactionDto>({
      query: (transaction) => ({
        url: "/transactions",
        method: "POST",
        body: transaction,
      }),
      invalidatesTags:['Transaction']
    }),
    editTransaction: builder.mutation<string, EditTransactionDto>({
      query: (transaction) => ({
        url: `/transactions/${transaction.id}`,
        method: "PUT",
        body: transaction,
      }),
      invalidatesTags:['Transaction']
    }),
    deleteTransaction: builder.mutation<void, string>({
      query: ( id ) => ({
        url: `/transactions/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:['Transaction']
    })
  }),
})

export const { useGetTransactionsQuery, useAddTransactionMutation, useEditTransactionMutation, useDeleteTransactionMutation } = TransactionService

import { ITransaction, TransactionDto } from "../entitites/ITransactions"
import { api } from "./api"
type GetTransactionsParams = {
  user_id: string
  startDate: string
  endDate: string
}
type DeleteTransactionParams = {
  user_id: string,
  id: string
}

const TransactionService = api.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<ITransaction[], GetTransactionsParams>({
      query: ({ user_id, startDate, endDate }: GetTransactionsParams) =>
        `/transactions/${user_id}?startDate=${startDate}&endDate=${endDate}`,
      transformResponse: (response: ITransaction[]) => response.reverse(),
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
    deleteTransaction: builder.mutation<string, DeleteTransactionParams>({
      query: ({ id, user_id }) => ({
        url: `/transactions/${id}?user_id=${user_id}`,
        method: 'DELETE',
      }),
      invalidatesTags:['Transaction']
    })
  }),
})

export const { useGetTransactionsQuery, useAddTransactionMutation, useDeleteTransactionMutation } = TransactionService

import { ITransaction, TransactionDto } from "../entitites/ITransactions"
import { api } from "./api"
type GetTransactionsParams = {
  user_id: string
  startDate: string
  endDate: string
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
  }),
})

export const { useGetTransactionsQuery, useAddTransactionMutation } = TransactionService

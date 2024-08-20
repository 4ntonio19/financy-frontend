import { ITransaction } from "../entitites/ITransactions"
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
    }),
    addTransaction: builder.mutation<string, ITransaction>({
      query: (transaction) => ({
        url: "/transactions",
        method: "POST",
        body: transaction,
      }),
    }),
  }),
})

export const { useGetTransactionsQuery, useAddTransactionMutation } = TransactionService

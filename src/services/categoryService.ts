import { ICategory } from "../entitites/ITransactions"
import { api } from "./api"
type GetCategoriesParams = {
    user_id: string
    type: string
}
const CategoryService = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<ICategory[], GetCategoriesParams>({
      query: ({user_id, type}: GetCategoriesParams) =>
        `/categories/${user_id}?type=${type}`,
      providesTags:['Transaction']
    }),
  }),
})

export const { useGetCategoriesQuery } = CategoryService
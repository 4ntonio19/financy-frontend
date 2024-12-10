import { ICategoryChart } from "../entitites"
import { api } from "./api"
const CategoryService = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<ICategoryChart[], boolean>({
      query: (type: boolean) =>
        `/categories/?type=${type}`,
      providesTags:['Transaction']
    }),
  }),
})

export const { useGetCategoriesQuery } = CategoryService
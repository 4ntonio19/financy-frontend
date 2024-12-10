import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ISessionResponse, IUserCredentials } from "../entitites"

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_URL}`,
    prepareHeaders(headers) {
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Transaction'],
  endpoints: (builder) => ({
    login: builder.mutation<ISessionResponse, IUserCredentials>({
      query: (credentials) => ({
        url: '/auth/session',
        method: 'POST',
        body: credentials,
      })
    })
  })
})

export const { useLoginMutation } = api
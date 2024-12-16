import { UserRequestBody } from '../entitites/User'
import { api } from './api'

const UserService = api.injectEndpoints({
  endpoints: builder => ({
    createUser: builder.mutation<void, UserRequestBody>({
      query: body => ({
        url: '/user',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useCreateUserMutation } = UserService

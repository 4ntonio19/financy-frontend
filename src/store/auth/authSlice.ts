import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISessionResponse } from "../../entitites";
import { api } from "../../services/api";

const initialState: ISessionResponse = {
    token: '',
    user: {
        userId: '',
        firstName: ''
    }
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearSession: (state) => {
            state.token = ''
            state.user = {
                userId: '',
                firstName: ''
            }
            window.location.href = '/login'
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            api.endpoints.login.matchFulfilled,
            (state, { payload }: PayloadAction<ISessionResponse>) => {                
                state.token = payload.token
                state.user = payload.user
                localStorage.setItem('token', payload.token)
                localStorage.setItem('user', JSON.stringify(payload.user))
            }
        )
    },
})

export const {clearSession} = authSlice.actions

export default authSlice.reducer
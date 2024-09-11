import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
type StateType = {
    dateStart: string, 
    dateEnd: string
}
const initialState: StateType = {
    dateStart: '',
    dateEnd: ''
}

export const dateFilterSlice = createSlice({
    name: 'dateFilter',
    initialState,
    reducers: {
        addDates: (_, { payload }: PayloadAction<StateType>) => {
            return payload;
        }
    }
})

export const { addDates } = dateFilterSlice.actions

export default dateFilterSlice.reducer

export const SelectDates = (state: RootState) => state.dateFilter
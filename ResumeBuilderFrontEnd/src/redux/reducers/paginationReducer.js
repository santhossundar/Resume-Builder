import { createSlice } from '@reduxjs/toolkit';

const paginationReducer = createSlice({
    name: 'pagination',
    initialState: {
        value: 0
    },
    reducers: {
        prev: (state) => {
            state.value -= 1
        },
        next: (state) => {
            state.value += 1
        }
    }
});

export const {prev, next} = paginationReducer.actions;
export default paginationReducer.reducer;
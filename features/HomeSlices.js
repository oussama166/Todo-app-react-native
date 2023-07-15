import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

export const HomeSlice = createSlice({
    name: "Home",
    initialState,
    reducers: {
        increment: (state) => {
            if (state.counter < 2) {
                state.counter += 1
            }
            else {
                state.counter = 2
            }
        },
        decrement: (state) => {
            if (state.counter > 0) {
                state.counter -= 1
            }
            else {
                state.counter = 0
            }
        },
        setActive: (state, action) => {
            state.counter = action.payload
        }
    }
})

export const { increment, decrement, setActive } = HomeSlice.actions

export default HomeSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    password: "",
    isLogged: false,
}

export const AuthentificationSlices = createSlice({
    name: "Authentification",
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setLogged: (state, action) => {
            state.isLogged = action.payload
        }
    }
})

export const { setUsername, setPassword, setLogged } = AuthentificationSlices.actions


export default AuthentificationSlices.reducer

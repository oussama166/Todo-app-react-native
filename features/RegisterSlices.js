import { Check } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // Essentiel
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
    // Secondaire
    isRegister: false,
    isLogin: false,
    isLogout: false,
    isLoginError: false,
    isConfirmPasswordError: true,
    isRegisterError: false,
    isLogoutError: false,
    isLoginLoading: false,
    isRegisterLoading: false,
    isLogoutLoading: false,
}

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload

        },
        setPassword: (state, action) => {
            state.password = action.payload

        },
        setEmail: (state, action) => {
            state.email = action.payload

        },
        setConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload
            CheckPassword()
        },
        CheckPassword: (state) => {
            if (state.password != state.confirmPassword && state.confirmPassword.trim != "" && state.password.trim != "") {
                state.isConfirmPasswordError = true
            }
            else {
                state.isConfirmPasswordError = false
            }
            console.log(state.isConfirmPasswordError, state.password, state.confirmPassword);
        }
    }
})


export const { setUsername, setPassword, setEmail, setConfirmPassword, CheckPassword } = registerSlice.actions

export default registerSlice.reducer
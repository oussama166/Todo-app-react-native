import { configureStore } from '@reduxjs/toolkit'
import HomeReducer from './features/HomeSlices'
import AuthentificationReducer from './features/AuthentificationSlices'
import RegisterReducer from './features/RegisterSlices'

export const store = configureStore({
    reducer: {
        Home: HomeReducer,
        Authetification: AuthentificationReducer,
        register: RegisterReducer,
    }
})


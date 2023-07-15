import { configureStore } from '@reduxjs/toolkit'
import HomeReducer from './features/HomeSlices'

export const store = configureStore({
    reducer: {
        Home: HomeReducer
    }
})


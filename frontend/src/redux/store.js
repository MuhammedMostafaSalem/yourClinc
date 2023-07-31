import { configureStore } from '@reduxjs/toolkit'
import docSlice from './DocSlice';


export const store = configureStore({
    reducer: {
        docSlice,
    },
})
import { configureStore } from '@reduxjs/toolkit'
import docSlice from './DocSlice';
import clientSlice from './ClientSlice';


export const store = configureStore({
    reducer: {
        docSlice,
        clientSlice,
    },
})
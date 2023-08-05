import { configureStore } from '@reduxjs/toolkit';
import DocSlice from './Slices/DocSlice';
import ClientSlice from './Slices/ClientSlice';

export default configureStore({
    reducer: {
        doctor: DocSlice,
        client: ClientSlice
    },
})
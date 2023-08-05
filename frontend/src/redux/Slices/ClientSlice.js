import { createSlice } from "@reduxjs/toolkit"
import { deleteClient, getClient, getClients, insertClients } from "../Actions/ClientAction";

const initialState = {
    comments: [],
    isloading: false,
    error: null,
    commentsInfo: null,
}
const ClientSlice = createSlice({
    name: 'client',
    initialState,
    extraReducers: {
        // getClients
        [getClients.pending]: (state , action)=> {
            state.isloading = true;
            state.error = null;
        },
        [getClients.fulfilled]: (state , action)=> {
            state.isloading = false;
            state.comments = action.payload
        },
        [getClients.rejected]: (state , action)=> {
            state.isloading = false;
            state.error = action.payload;
        },

        //insert
        [insertClients.pending]: (state, action) => {
            state.isloading = true;
            state.error = null;
        },
        [insertClients.fulfilled]: (state, action) => {
            state.isloading = false;
            state.comments.push(action.payload);
        },
        [insertClients.rejected]: (state, action) => {
            state.isloading = false;
            state.error = action.payload;
        },

        // delete
        [deleteClient.pending]: (state, action) => {
            state.isloading = true;
            state.error = null;
        },
        [deleteClient.fulfilled]: (state, action) => {
            state.isloading = false;
            state.comments = state.comments.filter((e) => e.id !== action.payload.id);
        },
        [deleteClient.rejected]: (state, action) => {
            state.isloading = false;
            state.error = action.payload;
        },

        // read
        [getClient.fulfilled]: (state, action) => {
            state.isloading = false;
            state.commentsInfo = action.payload;
        },
    }
})

export default ClientSlice.reducer
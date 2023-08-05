import { createSlice } from "@reduxjs/toolkit"
import { deleteDoctor, getDoctor, getDoctors, insertDoctors } from "../Actions/DocAction";

const initialState = {
    posts: [],
    isloading: false,
    error: null,
    postsInfo: null,
}
const DocSlice = createSlice({
    name: 'doctor',
    initialState,
    extraReducers: {
        // getDoctors
        [getDoctors.pending]: (state , action)=> {
            state.isloading = true;
            state.error = null;
        },
        [getDoctors.fulfilled]: (state , action)=> {
            state.isloading = false;
            state.posts = action.payload
        },
        [getDoctors.rejected]: (state , action)=> {
            state.isloading = false;
            state.error = action.payload;
        },

        //insert
        [insertDoctors.pending]: (state, action) => {
            state.isloading = true;
            state.error = null;
        },
        [insertDoctors.fulfilled]: (state, action) => {
            state.isloading = false;
            state.posts.push(action.payload);
        },
        [insertDoctors.rejected]: (state, action) => {
            state.isloading = false;
            state.error = action.payload;
        },

        // delete
        [deleteDoctor.pending]: (state, action) => {
            state.isloading = true;
            state.error = null;
        },
        [deleteDoctor.fulfilled]: (state, action) => {
            state.isloading = false;
            state.posts = state.posts.filter((e) => e.id !== action.payload.id);
        },
        [deleteDoctor.rejected]: (state, action) => {
            state.isloading = false;
            state.error = action.payload;
        },

        // read
        [getDoctor.fulfilled]: (state, action) => {
            state.isloading = false;
            state.postsInfo = action.payload;
        },
    }
})

export default DocSlice.reducer
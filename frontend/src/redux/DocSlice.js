import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDoctors = createAsyncThunk(
    'posts/getDoctors',
    async (_ , thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try{
            const res = await fetch('http://localhost:4000/posts');
            const data = await res.json();
            return data;
        } catch(err) {
            return rejectWithValue(err.messege)
        }
    }
)

export const insertdocs = createAsyncThunk(
    'posts/insertdocs',
    async (docData, thunkAPI)=> {
        const {rejectWithValue , getState} = thunkAPI;
        try {
            // docData.name = getState().auth.name;
            const res = await fetch('http://localhost:4000/posts', {
                method: 'POST',
                body: JSON.stringify(docData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            // report
            const data = await res.json();
            return data;
        } catch (err) {
            return rejectWithValue(err.messege)
        }
    }
)

export const deleteDoc = createAsyncThunk(
    'posts/deleteDoc',
    async (item , thunkAPI)=> {
        const {rejectWithValue} = thunkAPI;
        try {
            await fetch(`http://localhost:4000/posts/${item.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            return item;
        } catch (error) {
            return rejectWithValue(error.messege)
        }
    }
)

export const getDoc = createAsyncThunk(
    'posts/getDoc',
    async (item , thunkAPI)=> {
        const {rejectWithValue} = thunkAPI;
        try {
            await fetch(`http://localhost:4000/posts/${item.id}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            return item;
        } catch (error) {
            return rejectWithValue(error.messege)
        }
    }
)





const docSlice = createSlice({
    name: 'doc',
    initialState: {docs: [], isloading: false, error: null, docInfo: null},
    extraReducers: {
        // getDocs
        [getDoctors.pending]: (state , action)=> {
            state.isloading = true;
            state.error = null;
        },
        [getDoctors.fulfilled]: (state , action)=> {
            state.isloading = false;
            state.docs = action.payload
        },
        [getDoctors.rejected]: (state , action)=> {
            state.isloading = false;
            state.error = action.payload;
        },

        //insert
        [insertdocs.pending]: (state, action) => {
            state.isloading = true;
            state.error = null;
        },
        [insertdocs.fulfilled]: (state, action) => {
            state.isloading = false;
            state.docs.push(action.payload);
        },
        [insertdocs.rejected]: (state, action) => {
            state.isloading = false;
            state.error = action.payload;
        },

        // delete
        [deleteDoc.pending]: (state, action) => {
            state.isloading = true;
            state.error = null;
        },
        [deleteDoc.fulfilled]: (state, action) => {
            state.isloading = false;
            state.docs = state.docs.filter((e) => e.id !== action.payload.id);
        },
        [deleteDoc.rejected]: (state, action) => {
            state.isloading = false;
            state.error = action.payload;
        },

        // readBook
        [getDoc.fulfilled]: (state, action) => {
            state.isloading = false;
            state.docInfo = action.payload;
        },
    }
})

export default docSlice.reducer
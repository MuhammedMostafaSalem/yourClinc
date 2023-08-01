import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getClients = createAsyncThunk(
    'client/getClients',
    async (_ , thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try{
            const res = await fetch('http://localhost:4000/client');
            const data = await res.json();
            return data;
        } catch(err) {
            return rejectWithValue(err.messege)
        }
    }
)

export const insertclient = createAsyncThunk(
    'client/insertclient',
    async (clientData, thunkAPI)=> {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await fetch('http://localhost:4000/client', {
                method: 'POST',
                body: JSON.stringify(clientData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            const data = await res.json();
            return data;
        } catch (err) {
            return rejectWithValue(err.messege)
        }
    }
)

export const deleteClient = createAsyncThunk(
    'client/deleteClient',
    async (item , thunkAPI)=> {
        const {rejectWithValue} = thunkAPI;
        try {
            await fetch(`http://localhost:4000/client/${item.id}`, {
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

export const getClient = createAsyncThunk(
    'client/getClient',
    async (item , thunkAPI)=> {
        const {rejectWithValue} = thunkAPI;
        try {
            await fetch(`http://localhost:4000/client/${item.id}`, {
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


const clientSlice = createSlice({
    name: 'client',
    initialState: {clit: [], isloading: false, error: null, docInfo: null},
    extraReducers: {
        // getclients
        [getClients.pending]: (state , action)=> {
            state.isloading = true;
            state.error = null;
        },
        [getClients.fulfilled]: (state , action)=> {
            state.isloading = false;
            state.docs = action.payload
        },
        [getClients.rejected]: (state , action)=> {
            state.isloading = false;
            state.error = action.payload;
        },

        //insert
        [insertclient.pending]: (state, action) => {
            state.isloading = true;
            state.error = null;
        },
        [insertclient.fulfilled]: (state, action) => {
            state.isloading = false;
            state.docs.push(action.payload);
        },
        [insertclient.rejected]: (state, action) => {
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
            state.docs = state.docs.filter((e) => e.id !== action.payload.id);
        },
        [deleteClient.rejected]: (state, action) => {
            state.isloading = false;
            state.error = action.payload;
        },

        // readClient
        [getClient.fulfilled]: (state, action) => {
            state.isloading = false;
            state.docInfo = action.payload;
        },
    }
})

export default clientSlice.reducer
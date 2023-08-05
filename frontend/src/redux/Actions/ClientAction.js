import { createAsyncThunk } from "@reduxjs/toolkit";

export const getClients = createAsyncThunk(
    'client/getClients',
    async (_ , thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await fetch('http://localhost:4000/comments');
            const data = await res.json();
            return data;
        }
        catch(error) {
            return rejectWithValue(error.messege)
        }
    }
)

export const insertClients = createAsyncThunk(
    'client/insertClients',
    async (clientsData , thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await fetch('http://localhost:4000/comments', {
                method: 'POST',
                body: JSON.stringify(clientsData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            // report
            const data = await res.json();
            return data;
        }
        catch (error) {
            return rejectWithValue(error.messege)
        }
    }
)

export const deleteClient = createAsyncThunk(
    'client/deleteClient',
    async (item , thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            await fetch(`http://localhost:4000/comments/${item.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            return item;
        }
        catch (error) {
            return rejectWithValue(error.messege)
        }
    }
)

export const getClient = createAsyncThunk(
    'client/getClient',
    async (item , thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            await fetch(`http://localhost:4000/comments/${item.id}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            return item;
        }
        catch (error) {
            return rejectWithValue(error.messege)
        }
    }
)
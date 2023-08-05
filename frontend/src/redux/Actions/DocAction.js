import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDoctors = createAsyncThunk(
    'doctor/getDoctors',
    async (_ , thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await fetch('http://localhost:4000/posts');
            const data = await res.json();
            return data;
        }
        catch(error) {
            return rejectWithValue(error.messege)
        }
    }
)

export const insertDoctors = createAsyncThunk(
    'doctor/insertDoctors',
    async (postsData , thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await fetch('http://localhost:4000/posts', {
                method: 'POST',
                body: JSON.stringify(postsData),
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

export const deleteDoctor = createAsyncThunk(
    'doctor/deleteDoctor',
    async (item , thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            await fetch(`http://localhost:4000/posts/${item.id}`, {
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

export const getDoctor = createAsyncThunk(
    'doctor/getDoctor',
    async (item , thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            await fetch(`http://localhost:4000/posts/${item.id}`, {
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
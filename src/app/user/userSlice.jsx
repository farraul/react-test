import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    token: null,
    userInfo: {},
    error: null,
    succes: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {},
})


export default userSlice.reducers;
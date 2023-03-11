import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from './userAction';


const userToken = localStorage.getItem('userJwt') ? localStorage.getItem('userJwt') : null



const initialState = {
    loading: false,
    userToken,
    userInfo: {},
    error: null,
    succes: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [loginUser.pending]: (state) => { state.loading = true, state.error = null },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.loading = false,
            state.userInfo = payload,
            state.userToken = payload.token
        },
        [loginUser.rejected]: (state, { payload }) => { state.loading = false, state.error = payload },
    },
})


export default userSlice.reducers;
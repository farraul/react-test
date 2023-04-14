import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from './userAction';

const initialState = {
    loading: false,
    userToken: null,
    userInfo: {
        username: "",
        email: "",
        uid: null,
    },

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
                state.userInfo = {
                    username: payload.username,
                    email: payload.email,
                    uid: payload.uid,
                },
                state.userToken = null
        },
        [loginUser.rejected]: (state, { payload }) => { state.loading = false, state.error = payload },
    },
})


export default userSlice.reducer;
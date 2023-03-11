import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice'

const store = configureStore({
    reducer: { use: userReducer }
})

export default store;
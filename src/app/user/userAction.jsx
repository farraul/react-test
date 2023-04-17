import { createAsyncThunk } from "@reduxjs/toolkit";
import jwtServiceConfig from "@/services/jwtServiceConfig";
import userLoginAdapter from "@/adapters/userLoginAdapter"

export const loginUser = createAsyncThunk(
    jwtServiceConfig.signIn,
    async ({ email, password, }, { rejectWithValue }) => {

        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            const info = userLoginAdapter(user)
            console.log({ user })
            return info;
        }
        catch (error) {
            if (error) {
                return rejectWithValue(error.code)
            }
        }
    }
)


import { createAsyncThunk } from "@reduxjs/toolkit";
import jwtServiceConfig from "./services/jwtService/jwtServiceConfig";
import axios from 'axios';

export const loginUser = createAsyncThunk(
    jwtServiceConfig.signIn,
    async ({ email, password, }, { reject }) => {

        try {
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }

            const { data } = await axios.post(`http://localhost:3333/api/authenticate`, { email, password }, config);
            localStorage.setItem('userJwt',data.token)
            return data
        }
        catch (error) {
            console.log(error);
            if (error.response) {
                return reject(error.response);
            } else {
                return reject(error.message);
            }
        }
    }
)


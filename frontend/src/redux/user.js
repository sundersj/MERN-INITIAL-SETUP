import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: null,
    email: null,
    logged_in: false,
    role: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
});

export const { } = userSlice.actions

export default userSlice.reducer
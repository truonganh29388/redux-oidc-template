import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    accessToken: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        storeUser: (state,action) => {
            state.user = action.payload;
        },
        removeUser: (state) =>{
            state.user = null;
        }
    }   
})

export const {storeUser, removeUser} = authSlice.actions;

export default authSlice.reducer;
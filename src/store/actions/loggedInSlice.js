import { createSlice } from '@reduxjs/toolkit';

const loggedInSlice = createSlice({
    name: "LoggedIn",
    initialState: false,
    reducers:{
        loggedIn(state){
            return state = true;
        },
        loggedOut(state){
           return state = false;
        }
    }
})

export const {loggedIn, loggedOut} = loggedInSlice.actions;
export default loggedInSlice.reducer; 
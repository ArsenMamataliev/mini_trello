import { createSlice } from '@reduxjs/toolkit';

const addDashboard = createSlice({
    name: "AddDashboard",
    initialState: false,
    reducers:{
        showAddDashboardBox(state){
            state = true;
        },
        hideAddDashboardBox(state){
            state = false;
        }
    }
})

export const {showAddDashboardBox, hideAddDashboardBox} = addDashboard.actions;
export default addDashboard.reducer; 
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const dashboardsSlice = createSlice({ 
    name: "Dashes",
    initialState,
    reducers:{
        addDash(state, action){
            let {id, dashboardName} = action.payload;
            state.push({id: id, name: dashboardName, tasks:[]});   
        },
        addTask(state, action){
            action.payload && state[action.payload.index].tasks.push({
                taskId: action.payload.taskId,
                taskName: action.payload.taskName,
                taskStatus: action.payload.taskStatus,
                });   
           },  
        deleteDash(state, action){
            return  state.filter(item => item.id !== action.payload);
        },
        renameDash(state, action){
            
        }

    }
})

export const{addDash, addTask, deleteDash, renameDash}=dashboardsSlice.actions;
export default dashboardsSlice.reducer;  
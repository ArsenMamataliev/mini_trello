import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const dashboardsSlice = createSlice({ 
    name: "Dashes",
    initialState,
    reducers:{
        addDash(state, action){
            let {id, dashboardName} = action.payload;
            dashboardName.length !== 0 && state.push({id: id, name: dashboardName, tasks:[]});   
        },
        addTask(state, action){
            let taskName = action.payload.taskName;
            let taskStatus = action.payload.taskStatus;
            if (taskName.length !== 0 || taskName ==="underfined"){
                if(taskStatus === "Low"){
                    state[action.payload.index].tasks.push({
                        taskId: action.payload.taskId,
                        taskName,
                        taskStatus,
                    }
                    )} else {
                    state[action.payload.index].tasks.unshift({
                        taskId: action.payload.taskId,
                        taskName,
                        taskStatus,  
                    })
                }
            }
        }, 
        deleteTask(state, action){
            
        },

        deleteDash(state, action){
            return  state.filter(item => item.id !== action.payload);
        }
    }
})

export const{addDash, addTask, deleteDash, renameDash, deleteTask}=dashboardsSlice.actions;
export default dashboardsSlice.reducer;  
import { configureStore } from "@reduxjs/toolkit";
import addDashboardSlice from "./actions/addDashboardSlice";
import loggedInSlice from "./actions/loggedInSlice";
import dashboardsSlice from "./dashboardsSlice";

const store = configureStore({
    reducer: {
    showHide: addDashboardSlice,
    dashboards: dashboardsSlice,
    loggedIn: loggedInSlice
    },
});

export default store; 
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskSlice"
const store = configureStore({
  reducer: {
    tasksCreate: taskReducer,
  },
});

export default store;

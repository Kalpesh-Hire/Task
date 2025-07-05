import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasks: []
}

const taskSlice = createSlice({
    name: "tasksCreate",
    initialState,
    reducers:{
        addTask: (state, action)=>{
            state.tasks.push(action.payload)
        },
        editTask: (state, action) => {
            const {index, updatedTask} = action.payload;
            state.tasks[index] = updatedTask
        },
        addTimeToTask:(state, action)=>{
            const {index, timeData} = action.payload;
            state.tasks[index] = {...state.tasks[index], ...timeData}
        }
    }
})

export const {addTask,editTask,addTimeToTask} = taskSlice.actions
export default taskSlice.reducer
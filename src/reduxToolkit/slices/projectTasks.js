import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";

const initialState = {
    projectTasks: [],
}

export const setTaskFromProject = createAsyncThunk('currentTask/setTaskFromProject',async(action,{rejectWithValue,dispatch}) => {
    const titleTask = localStorage.getItem(`${action.key}`)


    // localStorage.setItem(`${action.key}`,`${action.titleTask}`)
})

const projectTasksSlice = createSlice({
    name:"projectTasks",
    initialState,
    reducers:{
        setProjectTasks(state,action){
        },
    },
    extraReducers:(builder => {
        // [getTask.fulfilled]: () => console.log('fullFild'),
        // [getTask.pending]: () => console.log('pending'),
        // [getTask.rejected]: () => console.log('rejected'),
    })

})

export const {} = projectTasksSlice.actions

export default projectTasksSlice.reducer
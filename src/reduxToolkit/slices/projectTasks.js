import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";

const initialState = {
    projectTasks: [],
}

export const setTaskFromProject = createAsyncThunk('currentTask/setTaskFromProject',async(action,{rejectWithValue,dispatch}) => {

    const getItem = localStorage.getItem(`${action.key}`)
    const arrayTaskItem = JSON.parse(getItem).taskItem


    if(localStorage.length !== 0 &&  getItem !== null){
        console.log("Ща сработает")
        arrayTaskItem.push(action.taskItem)
        console.log(arrayTaskItem)
    }













    // const taskProject ={
    //     titleTask:getItem.titleTodo,
    //     taskItem:arrayTaskItem
    // }
    // console.log(taskProject)
    // localStorage.setItem(`${action.key}`,`${JSON.stringify(taskProject)}`)
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
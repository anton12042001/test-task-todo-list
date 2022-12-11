import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";

const initialState = {
    projectTasks: [],
}

export const setTaskFromProject = createAsyncThunk('projectTasks/setTaskFromProject',async(action,{rejectWithValue,dispatch}) => {
    dispatch(removeProjectTasks())
    const getItem = localStorage.getItem(`${action.key}`)
    const arrayTaskItem = JSON.parse(getItem).taskItem
    if(localStorage.length !== 0 &&  getItem !== null){
        (action.taskItem && arrayTaskItem.push(action.taskItem))
        const taskProject ={
            titleTodo:JSON.parse(getItem).titleTodo,
            taskItem:arrayTaskItem
        }
        localStorage.setItem(`${action.key}`,`${JSON.stringify(taskProject)}`)
        dispatch(setProjectTasks(JSON.parse(localStorage.getItem(`${action.key}`))))
    }
})

const projectTasksSlice = createSlice({
    name:"projectTasks",
    initialState,
    reducers:{
        setProjectTasks(state,action){
            state.projectTasks = action.payload
        },
        removeProjectTasks(state){
            state.projectTasks = []
        }
    },
    extraReducers:(builder => {
        // [setTaskFromProject.fulfilled]: () => console.log('fullFild'),
        // [setTaskFromProject.pending]: () => console.log('pending'),
        // [setTaskFromProject.rejected]: () => console.log('rejected'),
    })

})

export const {setProjectTasks,removeProjectTasks} = projectTasksSlice.actions

export default projectTasksSlice.reducer
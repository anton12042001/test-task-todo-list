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

export const deleteTaskFromProject = createAsyncThunk('projectTasks/deleteTaskFromProject',async(action,{rejectWithValue,dispatch}) => {
    const getItem = localStorage.getItem(`${action.idProject}`)
    if(localStorage.length !== 0 &&  getItem !== null) {
        const item = JSON.parse(localStorage.getItem(`${action.idProject}`))
        const taskArray = []
        item.taskItem.map((i, index) => {
            if (action.id !== index) {
                taskArray.push(i)
            }
        })
        const taskProject ={
            titleTodo:JSON.parse(getItem).titleTodo,
            taskItem:taskArray
        }
        localStorage.setItem(`${action.idProject}`,`${JSON.stringify(taskProject)}`)
        dispatch(removeProjectTasks())
        dispatch(setProjectTasks(JSON.parse(localStorage.getItem(`${action.idProject}`))))
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

    })

})

export const {setProjectTasks,removeProjectTasks} = projectTasksSlice.actions

export default projectTasksSlice.reducer
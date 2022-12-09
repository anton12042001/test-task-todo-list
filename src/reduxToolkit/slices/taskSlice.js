import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";

const initialState = {
    task: [],

}

export const getTask = createAsyncThunk("task/getTask", async (_, {rejectWithValue, dispatch}) => {
    dispatch(removeTask())
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        const getItem = localStorage.getItem(`${key}`)
        if(localStorage.length !== 0 &&  getItem !== null){
            const todoItem = JSON.parse(getItem)
            const res = {
                todoName: todoItem.titleTodo,
                taskItem:todoItem.taskItem,
                id: key
            }
            dispatch(setTask(res))
        }
    }
})


const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTask(state, action) {
            state.task.push(action.payload)
        },
        removeTask(state,action){
            state.task = []
        }
    },
    extraReducers:(builder => {
        // [getTask.fulfilled]: () => console.log('fullFild'),
        // [getTask.pending]: () => console.log('pending'),
        // [getTask.rejected]: () => console.log('rejected'),
    })
})
export const {setTask,removeTask} = taskSlice.actions

export default taskSlice.reducer
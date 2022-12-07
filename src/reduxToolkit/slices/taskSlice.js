import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";

const initialState = {
    task: [],

}

export const getTask = createAsyncThunk("task/getTask", async (_, {rejectWithValue, dispatch}) => {
    dispatch(removeTask())
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        const res = {
            todoName: localStorage.getItem(key),
            id: key
        }
        dispatch(setTask(res))

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
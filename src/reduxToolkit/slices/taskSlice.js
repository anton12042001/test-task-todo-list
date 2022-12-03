import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";

const initialState = {
    task: [],

}

export const getTask = createAsyncThunk("task/setTask", async (_,{ rejectWithValue , dispatch }) =>  {
    const res = localStorage.getItem("todoItem")
    dispatch(setTask(res))
    })



const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTask(state,action) {
            state.task = action.payload
        },
    },
    extraReducers:{
        [getTask.fulfilled]: () => console.log('fullFild'),
        [getTask.pending]: () => console.log('pending'),
        [getTask.rejected]: () => console.log('rejected'),
    }
})
export const {setTask} = taskSlice.actions

export default  taskSlice.reducer
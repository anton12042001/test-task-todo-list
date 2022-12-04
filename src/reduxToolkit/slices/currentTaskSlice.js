import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";

const initialState = {
    currentTaskName: ''
}


const currentTaskSlice = createSlice({
    name:"currentTask",
    initialState,
    reducers:{
        setCurrentTask(state,action){
          state.currentTaskName  = action.payload
        },
    }

})

export const {setCurrentTask} = currentTaskSlice.actions

export default currentTaskSlice.reducer
import {createSlice} from "@reduxjs/toolkit";

const initialState = {


}



const dialogsIdSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        setDialogs(state,action) {

        },

    },
})
export const {setDialogs} = dialogsIdSlice.actions

export default  dialogsIdSlice.reducer
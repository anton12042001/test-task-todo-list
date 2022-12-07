import {configureStore} from "@reduxjs/toolkit";
import taskReducer from './slices/taskSlice'
import currentTaskReducer from './slices/currentTaskSlice'
import projectTasksReducer from './slices/projectTasks'

export const store = configureStore({
    reducer: {
        task:taskReducer,
        currentTask:currentTaskReducer,
        projectTasks:projectTasksReducer,
    },

})
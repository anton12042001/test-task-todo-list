import {configureStore} from "@reduxjs/toolkit";
import taskReducer from './slices/taskSlice'
import currentTaskReducer from './slices/currentTaskSlice'

export const store = configureStore({
    reducer: {
        task:taskReducer,
        currentTask:currentTaskReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
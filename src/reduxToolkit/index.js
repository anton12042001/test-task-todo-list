import {configureStore} from "@reduxjs/toolkit";
import dialogsReducer from './slices/taskSlice'

export const store = configureStore({
    reducer: {
        task:dialogsReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
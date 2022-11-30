import {configureStore} from "@reduxjs/toolkit";
import dialogsReducer from './slices/dialogsIdSlice'

export const store = configureStore({
    reducer: {
        dialogs:dialogsReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
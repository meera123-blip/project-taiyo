import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./ContactSlice";


const store = configureStore({
    reducer: {
        contacts: contactSlice,
    }
})

export default store;
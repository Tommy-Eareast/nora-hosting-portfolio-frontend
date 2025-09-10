import { configureStore } from "@reduxjs/toolkit";
import eventpostsReducer from "./features/eventpostsSlice";

export const Store = configureStore({
    reducer: {
        eventposts: eventpostsReducer,
    },
});

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const fetchEventPosts = createAsyncThunk(
    "eventposts/fetchAll",
    async () => {
        const { data } = await api.fetchEventPosts();
        return data;
    }
);

const eventpostsSlice = createSlice({
    name: "eventposts",
    initialState: [],
    reducers: {
        createPost: (state, action) => {
            state.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchEventPosts.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const { createEventPost } = eventpostsSlice.actions;
export default eventpostsSlice.reducer;

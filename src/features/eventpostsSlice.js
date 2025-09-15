import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const fetchEventPosts = createAsyncThunk(
    "eventposts/fetchAll",
    async () => {
        const { data } = await api.fetchEventPosts();
        return data;
    }
);

export const createEventPost = createAsyncThunk(
    "eventposts/create",
    async (eventPost) => {
        const { data } = await api.createEventPost(eventPost);
        return data;
    }
);

const eventpostsSlice = createSlice({
    name: "eventposts",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEventPosts.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(createEventPost.fulfilled, (state, action) => {
                state.push(action.payload);
            });
    },
});

export default eventpostsSlice.reducer;

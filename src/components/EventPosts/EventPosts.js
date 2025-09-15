import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";
import { MainContainer, SmMargin, ActionDiv } from "./styles";
import { fetchEventPosts } from "../../features/eventpostsSlice";
import EventPost from "./EventPost/EventPost";

const EventPosts = () => {
    const eventposts = useSelector((state) => state.eventposts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEventPosts());
    }, [dispatch]);

    return !eventposts.length ? (
        <CircularProgress />
    ) : (
        <MainContainer container alignItems="stretch" spacing={3}>
            {eventposts.map((eventpost) => (
                <Grid key={eventpost._id} item xs={12} sm={6} md={6}>
                    <EventPost eventpost={eventpost} />
                </Grid>
            ))}
        </MainContainer>
    );
};

export default EventPosts;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEventPosts } from "../../features/eventpostsSlice";
import EventPost from "./EventPost/EventPost";
import { MainContainer, SmMargin, ActionDiv } from "./styles";

const EventPosts = () => {
    const eventposts = useSelector((state) => state.eventposts);
    const dispatch = useDispatch();

    console.log(eventposts);
    useEffect(() => {
        dispatch(fetchEventPosts());
    }, [dispatch]);

    return (
        <>
            <h1>Posts</h1>
            <EventPost />
            <EventPost />
            {/* {eventposts.map((eventpost) => (
                <EventPost key={eventpost._id} eventpost={eventpost} />
            ))} */}
        </>
    );
};

export default EventPosts;

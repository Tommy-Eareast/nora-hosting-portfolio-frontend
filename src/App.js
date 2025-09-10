import React, { useEffect } from "react";
import { Container, Grow, Grid } from "@mui/material";
import { StyledAppBar, Heading, Icon } from "./styles";
import { useDispatch } from "react-redux";

import { fetchEventPosts } from "./features/eventpostsSlice";
import EventPosts from "./components/EventPosts/EventPosts";
import Form from "./components/Form/Form";
import hostingIcon from "./images/hostingIcon.png";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEventPosts());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <StyledAppBar position="static" color="inherit">
                <Heading variant="h2" align="center">
                    Nora's Hosting Portfolio
                </Heading>
                <Icon src={hostingIcon} alt="hosting" height="60" />
            </StyledAppBar>

            <Grow in>
                <Container>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="stretch"
                        spacing={3}
                    >
                        <Grid
                            size={{ xs: 12, sm: 7 }}
                            sx={{ outline: "1px solid red" }}
                        >
                            <EventPosts />
                        </Grid>
                        <Grid
                            size={{ xs: 12, sm: 4 }}
                            sx={{ outline: "1px solid red" }}
                        >
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;

import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import hostingIcon from './images/hostingIcon.png'

import EventPosts from './components/EventPosts/EventPosts';
import Form from './components/Form/Form';

const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">
                    Nora's Hosting Portfolio
                </Typography>
                <img src={hostingIcon} alt="hosting" height="60" />
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid outline="solid red" item xs={12} sm={7}>
                            <EventPosts />
                        </Grid>
                        <Grid outline="solid red" item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
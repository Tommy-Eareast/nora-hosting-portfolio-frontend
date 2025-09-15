import React from "react";
import {
    Media,
    Border,
    FullHeightCard,
    StyledCard,
    Overlay,
    Overlay2,
    GridFlex,
    Details,
    Title,
    CardActions,
} from "./styles";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { Button, Card, Typography, CardContent } from "@mui/material";

const EventPost = ({ eventpost }) => {
    return (
        <StyledCard>
            <Media image={eventpost.selectedFile} title={eventpost.title} />
            <Overlay>
                <Typography variant="h6">{eventpost.organiser}</Typography>
                <Typography variant="body2">
                    {moment(eventpost.hostedOn).fromNow()}
                </Typography>
            </Overlay>
            <Overlay2>
                <Button
                    style={{ color: "white" }}
                    size="small"
                    onClick={() => {}}
                >
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </Overlay2>
            <Details>
                <Typography variant="body2" color="textSecondary">
                    {eventpost.tags.map((tag) => `#${tag}`)}
                </Typography>
            </Details>
            <CardContent>
                <Title variant="h5" gutterBottom></Title>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => {}}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {eventpost.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteIcon fontSize="small" />
                    Delete
                    {eventpost.likeCount}
                </Button>
            </CardActions>
        </StyledCard>
    );
};

export default EventPost;

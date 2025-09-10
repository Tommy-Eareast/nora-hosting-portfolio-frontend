// styles/PostStyles.js
import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export const Media = styled("div")({
    height: 0,
    paddingTop: "56.25%", // 16:9 aspect ratio
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
});

export const Border = styled("div")({
    border: "solid",
});

export const FullHeightCard = styled(Card)({
    height: "100%",
});

export const StyledCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
});

export const Overlay = styled("div")({
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
});

export const Overlay2 = styled("div")({
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
});

export const GridFlex = styled("div")({
    display: "flex",
});

export const Details = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
});

export const Title = styled("div")({
    padding: "0 16px",
});

export const CardActions = styled("div")({
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
});

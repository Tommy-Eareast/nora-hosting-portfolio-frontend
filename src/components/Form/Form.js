import React from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";

import {
    Root,
    StyledPaper,
    StyledForm,
    FileInput,
    ButtonSubmit,
} from "./styles";

const Form = () => {
    const handleSubmit = () => {
        console.log("submit");
    };

    return (
        <Paper className={ClassNames.paper}>
            <form
                autoComplete="off"
                noValidate
                className={ClassNames.form}
                onSubmit={handleSubmit}
            ></form>
        </Paper>
    );
};

export default Form;

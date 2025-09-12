import React, { useState } from "react";
import { FileUpload } from "./FileUpload";
import { selectClasses, TextField, Typography } from "@mui/material";
import { StyledPaper, StyledForm, FileInput, ButtonSubmit } from "./styles";

const Form = () => {
    const [eventPostData, setEventPostData] = useState({
        organiser: "",
        title: "",
        message: "",
        tags: [],
        selectedFile: "",
    });

    const handleSubmit = () => {
        console.log("submit");
    };

    const clear = () => {
        console.log("clear");
    };

    return (
        <StyledPaper>
            <StyledForm autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Enter new event</Typography>
                <TextField
                    name="organiser"
                    variant="outlined"
                    label="Organiser"
                    fullWidth
                    value={eventPostData.organiser}
                    onChange={(e) =>
                        setEventPostData({
                            ...eventPostData,
                            organiser: e.target.value,
                        })
                    }
                />
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={eventPostData.title}
                    onChange={(e) =>
                        setEventPostData({
                            ...eventPostData,
                            title: e.target.value,
                        })
                    }
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={eventPostData.message}
                    onChange={(e) =>
                        setEventPostData({
                            ...eventPostData,
                            message: e.target.value,
                        })
                    }
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={eventPostData.tags}
                    onChange={(e) =>
                        setEventPostData({
                            ...eventPostData,
                            tags: e.target.value,
                        })
                    }
                />
                <FileInput>
                    <FileUpload
                        type="file"
                        multiple={false}
                        onFileSelect={(base64) =>
                            setEventPostData({
                                ...eventPostData,
                                selectedFile: base64,
                            })
                        }
                    />
                </FileInput>
                <ButtonSubmit
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </ButtonSubmit>
                <ButtonSubmit
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </ButtonSubmit>
            </StyledForm>
        </StyledPaper>
    );
};

export default Form;

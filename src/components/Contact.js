import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Contact() {

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="First Name" variant="outlined" />
            <TextField id="filled-basic" label="Last Name" variant="filled" />
            <TextField id="standard-basic" label="Email" variant="standard" />
            <br />
            <TextField
                id="standard-multiline-static"
                label="Message"
                multiline
                rows={6}
                defaultValue="Say hi!"
                variant="standard"
            />
        </Box>
    );

}
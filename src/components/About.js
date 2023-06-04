import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


export default function About() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <h1>About Me</h1>
                <p>
                    My name is Mike Giovanetti. I am a full-stack web developer with a background in automation and application security.
                    I am currently working as a lead software engineer at State Farm for the Product Delivery Experience. We are responsible for
                    internal tools that help our product teams deliver value to our customers.
                </p>
            </Container>
        </React.Fragment>

    )
}
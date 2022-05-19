import * as React from 'react';
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import { AppBar } from '@material-ui/core';


export default function Landing() {
  return (
    <div>
        <AppBar>
            Better Than Jupiter
        </AppBar>  
        <Container maxWidth="sm">
        
            <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
            </Typography>

        </Container>
    </div>  
  );
}

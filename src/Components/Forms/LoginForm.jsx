import { Button, Container, TextField, Typography } from '@material-ui/core';
import { Stack } from '@mui/material';
import React from 'react';

function LoginForm () {
    return (  
        <div dir='ltr'>
        <Container>
          <Stack spacing={5}>
            <Typography variant="h3" gutterBottom component="div" style={{alignSelf:"center"}}>
              התחברות
            </Typography>

            <div className="div-form-inputs">
              <Typography className="typo-name-form" variant="body1">
                UserName
              </Typography>
              <TextField variant="standard" className="text-field-form" />
            </div>

            <div className="div-form-inputs">
              <Typography className="typo-name-form" variant="body1">
                Password
              </Typography>
              <TextField variant="standard" type="password" className="text-field-form" />
            </div>

            <Button
              color="primary"
              variant="contained"
              size="large"
              style={{ width: "100px",
            alignSelf:"center" }}
            >
              Login
            </Button>

            </Stack>
            </Container>
        </div>
     );
}

export default LoginForm;
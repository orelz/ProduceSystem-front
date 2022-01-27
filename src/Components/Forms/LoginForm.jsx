import { Button, Container, TextField, Typography } from '@material-ui/core';
import { Stack } from '@mui/material';
import React, { useState } from 'react';

function LoginForm (props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameHandler =(e) => {
    setUsername(e.target.value);
  }
  const passwordHandler =(e) => {
    setPassword(e.target.value);
  }

  const submitHandler =(e) =>{

    e.preventDefault();

    const user ={
      username: username,
      password: password,
    };

    console.log(user);
    props.onCloseModal();

  }


    return (  
        <div dir='ltr'>
          <form onSubmit={submitHandler}>

          
        <Container>
          <Stack spacing={5}>
            <Typography variant="h3" gutterBottom component="div" style={{alignSelf:"center"}}>
              התחברות
            </Typography>

            <div className="div-form-inputs">
              <Typography className="typo-name-form" variant="body1">
                UserName
              </Typography>
              <TextField variant="standard" type="text" className="text-field-form" onChange={usernameHandler}/>
            </div>

            <div className="div-form-inputs">
              <Typography className="typo-name-form" variant="body1">
                Password
              </Typography>
              <TextField variant="standard" type="password" className="text-field-form" onChange={passwordHandler} />
            </div>

            <Button
            type='submit'
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
            </form>
        </div>
     );
}

export default LoginForm;
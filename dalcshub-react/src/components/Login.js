//Author: Vrund Patel

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useUser } from './userContext';
import { Grid, TextField, Button, Typography } from '@mui/material';

const Login = () => {

  const {setUser}  = useUser(); 
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({
    loginEmail: '',
    loginPassword: ''
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setLoginInput({
      ...loginInput,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginInput);

    const loginError = validateInput();
    setLoginError(loginError);

    if (Object.values(loginError)[0].length === 0 && Object.values(loginError)[1].length === 0) {
      verifyLoginCredentials();

      setLoginInput({
        loginEmail: '',
        loginPassword: ''
      });
    }
  };

  const [loginErrors, setLoginError] = useState({});

  const validateInput = () => {
    const loginError = {};

    // email
    if (!loginInput.loginEmail) {
      loginError.loginEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(loginInput.loginEmail)) {
      loginError.loginEmail = 'Enter a valid email';
    } else {
      loginError.loginEmail = '';
    }

    // password
    if (!loginInput.loginPassword) {
      loginError.loginPassword = 'Password is required';
    } else {
      loginError.loginPassword = '';
    }

    return loginError;
  };

  const verifyLoginCredentials = async () => {
    const { loginEmail, loginPassword } = loginInput;
    const res = await fetch('/api/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword
      })
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      console.log('At least one of the fields is invalid from front end');
      window.alert('At least one of the fields is invalid');
    } else {
      window.alert('Login Successful');
      console.log('Login Successful');

      setUser(res)

      navigate('/main');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Grid item xs={10} sm={6} md={4}>
        <form onSubmit={handleSubmit}>

          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>

          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            name="loginEmail"
            value={loginInput.loginEmail}
            onChange={handleChange}
            error={Boolean(loginErrors.loginEmail)}
            helperText={loginErrors.loginEmail}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            name="loginPassword"
            value={loginInput.loginPassword}
            onChange={handleChange}
            error={Boolean(loginErrors.loginPassword)}
            helperText={loginErrors.loginPassword}
          />
          <Button variant="contained" size="small" type="submit" fullWidth>
            Login
          </Button>
          <Typography variant="body2" align="center" marginTop="8px">
            Forgot Password? <Link to={'/Register'}>Sign Up</Link>
          </Typography>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;

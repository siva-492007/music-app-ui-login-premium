import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Premium from './premium';

const theme = createTheme();

export default function SignIn() {
    
    const [signIn, setSignIn] = React.useState(false);
    const [email, setEmail] = React.useState(null);
    const [pwd, setPwd] = React.useState(null);

    const loginEmail = "default@gmail.com"
    const loginPwd = "password"

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const SignInPage = () => (
    <div>
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              value ={email}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              // autoFocus
              onChange={
                (event) => setEmail(event.target.value)
              }
            />
            <TextField
              value = {pwd}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={
                (event) => setPwd(event.target.value)
              }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                if(email === loginEmail && pwd === loginPwd){
                  setSignIn(true)
                }else{
                  window.alert("Enter valid credentials!");
                  setEmail(null);
                  setPwd(null);
                }
              }}
            >
              Sign In
            </Button>

          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
    </div>
  )

  const AfterSignIn = () => (
      <div>
          <h2>You have successfully signned in!</h2>
      </div>
  )

  return (
    (!signIn) ?
        <SignInPage /> :
        <AfterSignIn/> 
  );
}

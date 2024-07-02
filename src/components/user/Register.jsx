import { Container, Typography, TextField, Button, Paper, CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (retypePassword !== password) {
      alert("Passwords doesn't match");
      return;
    }
    // Add signup logic here
    const req = {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        username,
        email,
        password
      })
    }
try{

  const response = await fetch("http://localhost:3000/auth/register", req);
  const data = await response.json();
  if(response.status === 201){
    sessionStorage.setItem('jwtoken', data.jwtoken);
      navigate("/user/dashboard");
      return;
    }
    else{
      alert(data.error);
    }
  }
  catch(err){
    console.log("Error:",err);
    alert("Failed to perform fetch!");
  }
  };

  return (
    <Container maxWidth="xs" style={{}}>
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', }}>
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit} autoComplete='off'>
        <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={e => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Email"
            type='email'
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={e => setPassword(e.target.value)}
            required
          />
          <TextField
            label="Retype Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={e => setRetypePassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '20px' }}
          >
            Register
          </Button>
        </form>
        <Typography variant="body2" style={{ marginTop: '20px' }}>
          Aldready have an account? <Link to="/login">Login here</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Register;
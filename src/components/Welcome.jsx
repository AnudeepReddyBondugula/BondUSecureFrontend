import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to BondUSecure
        </Typography>
        <Box sx={{ mt: 4 }}>
        <Link to={"/register"}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Create an Account
          </Button>
        </Link>
        <Link to={"/login"}>
          <Button variant="outlined" color="primary">
            Login
          </Button>
        </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Welcome;

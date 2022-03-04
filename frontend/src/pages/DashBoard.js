import { Box } from '@mui/material';
import React from 'react'
import Nav from '../components/Nav/Nav';
import { DDState } from '../context/DDProvider';

const DashBoard = () => {
  const { user } = DDState();

  return (
   
    <Box sx={{ ml: 9.5, mt: 8.4, p: 2 }}>
    {user && <Nav />}
    <div>DashBoard</div>
  </Box>
  );
}

export default DashBoard
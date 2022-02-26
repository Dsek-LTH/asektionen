import { Stack } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Stack>
      <Navbar />
      <Stack component="main">{children}</Stack>
    </Stack>
  );
};

export default Layout;

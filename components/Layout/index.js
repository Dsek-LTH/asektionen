import { Stack } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Stack>
      <Navbar />
      <Stack component="main">{children}</Stack>
      <Footer />
    </Stack>
  );
};

export default Layout;

import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from "react-router-dom";
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function CustomSeparator({namepage}) {
  const location = useLocation();
  const isShopPage = location.pathname === "/shop";

  const breadcrumbs = [
    <Link 
      underline="hover" 
      key="1" 
      to="/"
      style={{ color: isShopPage ? 'white' : 'inherit' }}
      >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      style={{ color: isShopPage ? 'white' : 'inherit' }}
      to="/shop"
    >
      Shop
    </Link>,
    <Typography key="3" sx={{ color: 'text.primary' }}>
      {namepage}
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={
          <NavigateNextIcon 
            fontSize="small"
            style={{ color: isShopPage ? 'white' : 'inherit' }} 
          />
        }
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

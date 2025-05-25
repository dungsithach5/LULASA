import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function CustomSeparator({products}) {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" to="/">
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      to="/shop"
    >
      Shop
    </Link>,
    <Typography key="3" sx={{ color: 'text.primary' }}>
      {products}
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

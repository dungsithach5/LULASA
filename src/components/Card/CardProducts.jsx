import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function CardProducts({name, price, image}) {
  return (
    <Card sx={{ minHeight: 300}} elevation={0}>
      <CardContent>
        {image}
        <Typography>
          <span className="font-medium text-xl">{name}</span>
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins, san-serif' }}>
          <span className="font-medium">{price}</span>
        </Typography>
      </CardContent>
      {/* <CardActions className='flex justify-between'>
        <Link to="/detail" className='bg-[#2D6E53] text-white p-2 px-4 rounded'>Add to cart</Link>
      </CardActions> */}
    </Card>
  );
}

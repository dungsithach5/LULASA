import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function MediaCard({title, description, price, image}) {
  return (
    <Card sx={{ minHeight: 525,}}>
      {image}
      <CardContent>
        <Typography 
        gutterBottom variant="h5" 
        component="div" 
        sx={
          { 
            fontFamily: 'Poppins, san-serif',
            fontWeight: '500'
          }}>
          {title} 
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins, san-serif' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions className='flex justify-between'>
        <span className="font-medium">{price}</span>
        <Link to="/detail" className='bg-[#2D6E53] text-white p-2 px-4 rounded'>Add to cart</Link>
      </CardActions>
    </Card>
  );
}

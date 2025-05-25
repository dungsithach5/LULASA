import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({image, name, review}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        {image}
      <CardContent>
        <Typography 
            sx={
                { 
                    fontFamily: 'Poppins, san-serif',
                    fontWeight: '500',
                    textAlign: 'center',
                }}>
          {name}
        </Typography>
        <Typography>
          {review}
        </Typography>
      </CardContent>
    </Card>
  );
}

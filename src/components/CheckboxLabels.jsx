import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox />}
        label={
          <Typography sx={{ fontSize: '1rem' }}>
            30.000 VND - 40.000 VND
          </Typography>
        }
      />
    <FormControlLabel
        control={<Checkbox />}
        label={
          <Typography sx={{ fontSize: '1rem' }}>
            40.000 VND - 50.000 VND
          </Typography>
        }
      />
    <FormControlLabel
        control={<Checkbox />}
        label={
          <Typography sx={{ fontSize: '1rem' }}>
            50.000 VND - 60.000 VND
          </Typography>
        }
      />
    <FormControlLabel
        control={<Checkbox />}
        label={
          <Typography sx={{ fontSize: '1rem' }}>
            60.000 VND - 70.000 VND
          </Typography>
        }
      />
    <FormControlLabel
        control={<Checkbox />}
        label={
          <Typography sx={{ fontSize: '1rem' }}>
            70.000 VND - 80.000 VND
          </Typography>
        }
      />
    </FormGroup>
  );
}
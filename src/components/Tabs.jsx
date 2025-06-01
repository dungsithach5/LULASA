import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({description, ingredients, reviews}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: '#2D6E53', 
              height: '2px',
            },
          }}
          sx={{
              '& .MuiTab-root': {
                color: '#888888',
              },
              '& .Mui-selected': {
                color: '#2D6E53',
              },
          }}
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Ingredients" {...a11yProps(1)} />
          <Tab label="Reviews" {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className='grid grid-cols-1 gap-3'>
          <div className='grid gird-cols-1 gap-3'>
            <p className='text-2xl'>Product Description</p>
            <p className='text-[#4a4747] pl-5'>{description}</p>
          </div>
          <div className='grid grid-cols-1 gap-3'>
            <p className='text-2xl'>Benefits</p>
            <ul className='list-disc pl-10 text-[#4a4747]'>
              <li>Natural antibacterial</li>
              <li>Gentle for sensitive skin</li>
              <li>Change organic shea butter to pine oil</li>
              <li>Moisturizing and nourishing</li>
              <li>Cruelty-free and vegan</li>
            </ul>
          </div>
          <div className='grid gird-cols-1 gap-3'>
            <p className='text-2xl'>How to use</p>
            <p className='text-[#4a4747] pl-5'>Wet the soap and lather in your hands or on a washcloth. Gently massage over the skin, then rinse thoroughly. Allow the soap to dry between uses to extend its life.</p>
          </div>
          <div className='grid gird-cols-1 gap-3'>
            <p className='text-2xl'>Details</p>
            <div className='grid grid-cols-1 gap-3 text-[#4a4747] pl-5'>
              <p>Weight: 100g</p>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className='grid gird-cols-1 gap-3'>
          <p className='text-2xl'>Ingredients</p>
          <p className='text-[#4a4747] pl-5'>{ingredients}</p>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {reviews}
      </CustomTabPanel>
    </Box>
  );
}

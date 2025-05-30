import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

export default function Drawer({ icon, content, anchor = "right" }) {
  const [state, setState] = React.useState({
    open: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ open });
  };

  return (
    <div>
      <div onClick={toggleDrawer(true)}>{icon}</div>
      <SwipeableDrawer
        anchor={anchor}
        open={state.open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{ width: anchor === "top" ? "auto" : 400 }}
          role="presentation"
        >
          {content}
        </Box>
      </SwipeableDrawer>
    </div>
  );
}
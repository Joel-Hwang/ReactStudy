import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {Button,TextField} from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

type Anchor = 'top' | 'right';

interface CriteriaProps {
    openProp: boolean;
    setCriteriaOpen: (criteriaOpen: boolean) => void;
  }

const Criteria: React.FC<CriteriaProps> = ({openProp, setCriteriaOpen}) => {

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setCriteriaOpen(open);
  };

  const list = (anchor: Anchor) => (
    <>
    <Button size="small" style={{margin:10}}>Search</Button>  
    <Box
      
      role="presentation">
      
      <div style={{margin:20, marginBottom:30}}>
    <TextField id="season" name="season" label="Season" variant="standard" 
      sx={{width:60,
          marginRight:1}}/>
    <TextField id="Round" name="Round" label="Round" variant="standard" 
      sx={{width:100,
          marginRight:1}}/>
    <TextField id="devStyle" name="devStyle" label="Dev.Style" variant="standard" 
      sx={{width:200,
          marginRight:1}}/>

    <TextField id="colorway" name="colorway" label="Colorway" variant="standard" 
      sx={{width:200,
           marginRight:1}}/>
    </div>
    </Box>
    </>
  );
  return (

    <div>
      <React.Fragment key={'top'}>
        <Drawer
          anchor={'top'}
          open={openProp}
          onClose={toggleDrawer('top', false)}
        >
          {list('top')}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Criteria;
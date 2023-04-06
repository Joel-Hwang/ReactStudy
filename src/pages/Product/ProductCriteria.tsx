import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {Button,TextField} from '@mui/material';

type Anchor = 'top' | 'right';

interface CriteriaProps {
    openProp: boolean;
    setCriteriaOpen: (criteriaOpen: boolean) => void;
  }

const ProductCriteria: React.FC<CriteriaProps> = ({openProp, setCriteriaOpen}) => {

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
    <Button size="small" style={{margin:10}} variant="contained"
      onClick={(evt)=>{
        alert('asdasd');
      }}>Search</Button>  
    <Box role="presentation">
      <div style={{margin:20, marginBottom:30}}>
        <TextField id="_factory" name="_factory" label="Factory" variant="standard" 
          sx={{width:60, marginRight:1}}/>
        <TextField id="_season_cd" name="_season_cd" label="Season" variant="standard" 
          sx={{width:60, marginRight:1}}/>
        <TextField id="_st_cd" name="_st_cd" label="Sample Type" variant="standard" 
          sx={{width:100, marginRight:1}}/>
        <TextField id="_dev_style_number" name="_dev_style_number" label="Dev.Style#" variant="standard" 
          sx={{width:200, marginRight:1}}/>
        <TextField id="_dev_colorway_id" name="_dev_colorway_id" label="Colorway" variant="standard" 
          sx={{width:200, marginRight:1}}/>
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

export default ProductCriteria;
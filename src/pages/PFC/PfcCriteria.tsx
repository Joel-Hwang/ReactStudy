import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {Button,TextField} from '@mui/material';
import {API,get} from '../../Util';

type Anchor = 'top' | 'right';

interface CriteriaProps {
    openProp: boolean;
    setCriteriaOpen: (criteriaOpen: boolean) => void;
    setItemList: (param: Array<object>) => void;
}

interface Keys {
  _number: string;
  _season: string;
  _round: string;
  _colorway: string;
}

const PfcCriteria: React.FC<CriteriaProps> = ({openProp, setCriteriaOpen, setItemList}) => {
  const[searchKeys,setSearchKeys] = useState<Keys>({_number:'',_season:'',_round:'',_colorway:''});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearchKeys((prevKeys) => ({ ...prevKeys, [name]: value }));
  };

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
    <Button size="small" style={{margin:'auto', marginTop:10, width:'100%', maxWidth:300}} variant="contained"
      onClick={async (event)=>{
        event.preventDefault();
        console.log(JSON.stringify(searchKeys));
        let result = await get(`${API.LIST}/CS_PFC`,searchKeys);
        if(result && result.status == 200){
          setItemList(result.data.data.value);
        }else{
          setItemList([]);
        }
      }}>Search</Button>  
    <Box role="presentation" >
      <div style={{margin:20, marginBottom:30, display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
        <TextField id="_number" name="_number" label="Number" variant="standard" 
          sx={{width:60, margin:1}}
          onChange={handleInputChange}/>

        <TextField id="_season" name="_season" label="Season" variant="standard" 
          sx={{width:60, margin:1}}
          onChange={handleInputChange}/>

        <TextField id="_round" name="_round" label="Sample Type" variant="standard" 
          sx={{width:100, margin:1}}
          onChange={handleInputChange}/>

        <TextField id="_colorway" name="_colorway" label="Colorway" variant="standard" 
          sx={{width:200, margin:1}}
          onChange={handleInputChange}/>

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

export default PfcCriteria;
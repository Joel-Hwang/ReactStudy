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
  _factory: string;
  _season_cd: string;
  _st_cd: string;
  _dev_style_number: string;
  _dev_colorway_id: string;
}

const ProductCriteria: React.FC<CriteriaProps> = ({openProp, setCriteriaOpen, setItemList}) => {
  const[searchKeys,setSearchKeys] = useState<Keys>({_factory:'',_season_cd:'',_st_cd:'',_dev_style_number:'',_dev_colorway_id:''});

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
        let result = await get(`${API.LIST}/Product`,searchKeys);
        if(result && result.status == 200){
          setItemList(result.data.data.value);
        }else{
          setItemList([]);
        }
      }}>Search</Button>  
    <Box role="presentation" >
      <div style={{margin:20, marginBottom:30, display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
        <TextField id="_factory" name="_factory" label="Factory" variant="standard" 
          sx={{width:60, margin:1}}
          onChange={handleInputChange}/>

        <TextField id="_season_cd" name="_season_cd" label="Season" variant="standard" 
          sx={{width:60, margin:1}}
          onChange={handleInputChange}/>

        <TextField id="_st_cd" name="_st_cd" label="Sample Type" variant="standard" 
          sx={{width:100, margin:1}}
          onChange={handleInputChange}/>

        <TextField id="_dev_style_number" name="_dev_style_number" label="Dev.Style#" variant="standard" 
          sx={{width:200, margin:1}}
          onChange={handleInputChange}/>

        <TextField id="_dev_colorway_id" name="_dev_colorway_id" label="Colorway" variant="standard" 
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

export default ProductCriteria;
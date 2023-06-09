import React, { useState } from 'react';
import {TextField,Button, Card, CardActions , CardContent , CardMedia ,Typography  } from '@mui/material';
import './ItemList.css';
import { padding } from '@mui/system';

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
};

interface ItemListProp {
  mode:string
  setMode:(param:string) => void;
  itemList: Array<any>
}

const list = (callback: { (param: string): void; }, itemList: Array<any>) => {
    const result = [];
    for(let i = 0; i<itemList.length; i++){
        result.push(
            <Card sx={{ maxWidth: 345, margin:1 }} variant='outlined' key={i}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=>{callback("detail");}}>Detail</Button>
              </CardActions>
            </Card>
        );
    }
    return result;
}
const ItemList:React.FC<ItemListProp> = ({setMode, mode, itemList}) => {
    
    return (
        <div style={{padding:20, display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
            {list(setMode, itemList)}
            

        </div>
      );
};

export default ItemList;
import React, { useState } from 'react';
import {TextField,Button, Card, CardActions , CardContent , CardMedia ,Typography  } from '@mui/material';
import './ItemList.css';
import { padding } from '@mui/system';

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
};


const list = () =>{
    const result = [];
    for(let i = 0; i<10; i++){
        result.push(
            <Card sx={{ maxWidth: 345, margin:1 }} variant='outlined'>
              
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
                <Button size="small">Detail</Button>
              </CardActions>
            </Card>
        );
    }
    return result;
}
const ItemList = () =>{
    
    return (
        <div style={{padding:20, display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
            {list()}
            

        </div>
      );
};

export default ItemList;
import React, { useState } from 'react';
import {TextField,Button, Card, CardActions , CardContent , CardMedia ,Typography  } from '@mui/material';
import './ItemList.css';
import { padding } from '@mui/system';

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
};

const searchArea = () => (
    <div style={{marginBottom:30}}>
    <TextField id="season" name="season" label="Season" variant="standard" onChange={handleInputChange}
      sx={{width:60,
          marginRight:1}}/>
    <TextField id="Round" name="Round" label="Round" variant="standard" onChange={handleInputChange}
      sx={{width:100,
          marginRight:1}}/>
    <TextField id="devStyle" name="devStyle" label="Dev.Style" variant="standard" onChange={handleInputChange}
      sx={{width:200,
          marginRight:1}}/>

    <TextField id="colorway" name="colorway" label="Colorway" variant="standard" onChange={handleInputChange}
      sx={{width:200,
           marginRight:1}}/>
    </div>
);

const list = () =>{
    const result = [];
    for(let i = 0; i<10; i++){
        result.push(
            <Card sx={{ maxWidth: 345, marginBottom: 3 }} variant='outlined'>
              
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
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
        );
    }
    return result;
}
const ItemList = () =>{
    
    return (
        <div style={{padding:20}}>
            {searchArea()}
            {list()}
            

        </div>
      );
};

export default ItemList;
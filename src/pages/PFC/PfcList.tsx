import React, { useState } from 'react';
import {Button, Card, CardActions , CardContent , Typography  } from '@mui/material';



interface ProductListProp {
  mode:string
  setMode:(param:string) => void;
  itemList: Array<any>
  setItemId:(param:string) => void;

}

const list = (setModeCallback: { (param: string): void; }, itemList: Array<any>, setItemIdCallback: { (param: string): void; }) => {
    const result = [];
    for(let i = 0; i<itemList.length; i++){
        result.push(
            <Card sx={{ maxWidth: 345, margin:1 }} variant='outlined' key={i}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {itemList[i].keyed_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {itemList[i]._season_cd}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=>{
                    setModeCallback("detail");
                    setItemIdCallback(itemList[i].id)
                }}>Detail</Button>
              </CardActions>
            </Card>
        );
    }
    return result;
}
const PfcList:React.FC<ProductListProp> = ({setMode, mode, itemList, setItemId}) => {
    
    return (
        <div style={{padding:20, display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
            {list(setMode, itemList, setItemId)}
            

        </div>
      );
};

export default PfcList;
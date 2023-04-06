import React, { useState } from 'react';
import {TextField,Button, Box, List, ListItem, Paper, ListItemAvatar, Avatar, ListItemText,Typography, Divider  } from '@mui/material';
import ImageFileInput from '../../components/ImageFileInput';
import './ProductDetail.css';


const ProductDetail = () => {

  const [lateralView, setLateralView] = useState("/img/whiteblank.png");
  const [medialView, setMedialView] = useState("/img/whiteblank.png");
  const [bottomView, setBottomView] = useState("/img/whiteblank.png");
  const [frontView, setFrontView] = useState("/img/whiteblank.png");
  const [heelView, setHeelView] = useState("/img/whiteblank.png");
  
  

  const productArea = () => {
    return (
      <div>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="SP24 SPA CFM JORDAN 23E"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    DN4890-1427945
                  </Typography><br/>
                  {" PURE PLATINUM/DUNE RED-BLACK-"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </div>
    );
  }


  return (
    <div className='product'>

        {productArea()}
        
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center'}}>
        <ImageFileInput
            label={"Lateral View"} 
            width={220} 
            minWidth={100} 
            imageSrcProp={lateralView} 
            setImageSrc={setLateralView}
        />
        <ImageFileInput
          label={"Medial View"} 
          width={220} 
          minWidth={100} 
          imageSrcProp={medialView} 
          setImageSrc={setMedialView}
        />

        <ImageFileInput
          label={"Bottom View"} 
          width={220} 
          minWidth={100} 
          imageSrcProp={bottomView} 
          setImageSrc={setBottomView}
        />

        <ImageFileInput
          label={"Front View"} 
          width={220} 
          minWidth={100} 
          imageSrcProp={frontView} 
          setImageSrc={setFrontView}
        />

        <ImageFileInput
          label={"Heel View"} 
          width={220} 
          minWidth={100} 
          imageSrcProp={heelView} 
          setImageSrc={setHeelView}
        />

        </div>
    </div>
  );
}

export default ProductDetail;

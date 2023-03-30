import React, { useState } from 'react';
import {TextField,Button, Box, List, ListItem, Paper, ListItemAvatar, Avatar, ListItemText,Typography, Divider  } from '@mui/material';
import Camera from '../../components/Camera';
import ImageFileInput from '../../components/ImageFileInput';
import './FiveShot.css';


const FiveShot = () => {

  const [lateralView, setLateralView] = useState("/img/whiteblank.png");
  const [medialView, setMedialView] = useState("/img/whiteblank.png");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
  };
  const searchArea = () => (
        <div>
        <TextField
            id="username"
            name="username"
            label="Season"
            variant="standard"
            className='criteria-small'
            onChange={handleInputChange}
          />
        <TextField
            id="username"
            name="username"
            label="Round"
            variant="standard"
            className='criteria-small'
            onChange={handleInputChange}
          />
          <TextField
            id="username"
            name="username"
            label="Dev.Style"
            variant="standard"
            className='criteria-medium'
            onChange={handleInputChange}
          />
        <TextField
            id="username"
            name="username"
            label="Colorway"
            variant="standard"
            className='criteria-medium'
            onChange={handleInputChange}
          />
        </div>
  );

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
    <div className='five-shot'>
        {searchArea()}
        {productArea()}
        
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center'}}>
          <Button
            variant="outlined"
            component="label"
            sx={{
              width: 320,
              minWidth: 260,
            }}>
            <Typography variant="button" display="block" gutterBottom>
              Lateral View
              <Box
              component="img"
              sx={{
                width: 280,
                minWidth: 220,
              }}
              alt=""
              src={lateralView}
            />
            </Typography>
            
            <input type="file" hidden 
              onChange={
                (evt)=>{
                  if(evt.target.files && evt.target.files[0]) {
                    const reader = new FileReader()
                    reader.onload = e => {
                      let imageBlob:string = e.target?.result as string;
                      setLateralView(imageBlob);
                    }
                    reader.readAsDataURL(evt.target.files[0])
                  }
                }
              }/>
          </Button>
          <ImageFileInput
            label={"Medial View"} 
            width={320} 
            minWidth={260} 
            imageSrcProp={medialView} 
            setImageSrc={setMedialView}
            />


          <Button
            variant="outlined"
            component="label"
            className='horizontal'>
            Medial View
            <input type="file" hidden />
          </Button>

          <Button
            variant="outlined"
            component="label"
            className='horizontal'>
            Bottom View
            <input type="file" hidden />
          </Button>

          <Button
            variant="outlined"
            component="label"
            className='vertical'>
            Front View
            <input type="file" hidden />
          </Button>

          <Button
            variant="outlined"
            component="label"
            className='vertical'>
            Heel View
            <input type="file" hidden />
          </Button>

          
        </div>
    </div>
  );
}

export default FiveShot;

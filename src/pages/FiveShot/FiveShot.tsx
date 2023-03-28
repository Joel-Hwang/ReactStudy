import React, { useState } from 'react';
import {TextField,Button, Box, List, ListItem, Paper, ListItemAvatar, Avatar, ListItemText,Typography, Divider  } from '@mui/material';
import Camera from '../../components/Camera';
import ImageFileInput from '../../components/ImageFileInput';
import './FiveShot.css';


const FiveShot = () => {

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
  return (
    <div className='five-shot'>
        {searchArea()}
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
        <div>
          <Button
            variant="outlined"
            component="label"
            sx={{
              height: 233,
              width: 330,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 330, md: 230 },
            }}>
            <Typography variant="button" display="block" gutterBottom>
              Lateral View
            </Typography>
            <Box
              component="img"
              sx={{
                height: 213,
                width: 310,
                maxHeight: { xs: 213, md: 147 },
                maxWidth: { xs: 310, md: 210 },
              }}
              alt="The house from the offer."
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            />
            <input type="file" hidden />
          </Button>

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

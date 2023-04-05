import React, { useRef, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchIcon from '@mui/icons-material/Search';
import Criteria from '../Criteria';

interface ButtonAppBarProp {
    handleMenuClick: (param:boolean)=> void;
    title:string;
    mode:string
    setMode:(param:string) => void;
}
const ButtonAppBar:React.FC<ButtonAppBarProp> = ({handleMenuClick, title, setMode, mode}) => {
  const [criteriaOpen, setCriteriaOpen] = useState(false);
  const clickMenu = () => {
    handleMenuClick(true);
  };

  const showButtons = (mode:string) => {
    switch(mode){
      case "list":
        return <SearchIcon sx={{marginRight:2}} 
        onClick={()=>{
          setCriteriaOpen(true);
        }}/>
      case "detail":
        return <>
          <EditIcon sx={{marginRight:2}}
          onClick={()=>{
            setMode("edit");
          }}/>
          <FormatListBulletedIcon />
          </>
      case "edit":
        return <>
          <SaveIcon sx={{marginRight:2}}
          onClick={()=>{
            setMode("detail");
          }}/>
          <FormatListBulletedIcon onClick={()=>{setMode("list");}} />
        </>
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={clickMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {showButtons(mode)}
        </Toolbar>
      </AppBar>
      <Criteria openProp={criteriaOpen} setCriteriaOpen={setCriteriaOpen}></Criteria>
    </Box>
  );
}
export default ButtonAppBar;
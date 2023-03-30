import * as React from 'react';
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

interface ButtonAppBarProp {
    handleMenuClick: (open:boolean)=> void;
    title:string;
}
const ButtonAppBar:React.FC<ButtonAppBarProp> = ({handleMenuClick, title}) => {

  const clickMenu = () => {
    handleMenuClick(true);
  };
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
          <SearchIcon sx={{marginRight:2}}/>
          <EditIcon sx={{marginRight:2}}/>
          <SaveIcon sx={{marginRight:2}}/>
          <FormatListBulletedIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ButtonAppBar;
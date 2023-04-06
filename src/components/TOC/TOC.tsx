import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

type Anchor = 'left' | 'right';

interface TOCProps {
  openProp: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
  setMenuName: (menuName: string) => void;
  setItemType: (itemType: string) => void;
}

const TOC: React.FC<TOCProps> = ({ openProp, setMenuOpen, setMenuName, setItemType }) => {

  const menuList = [
    ["Product","Product"],
    ["PFC","CS_PFC"],
    ["",""],
    ["PE Workspace","CS_PE_WS"],
    ["PE Purchase","CS_PE_PUR"],
  ];

  const toggleDrawer = (anchor: Anchor, open: boolean, menuname?:string, itemTypeName?:string) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setMenuOpen(open);
    if(menuname && itemTypeName){
      setMenuName(menuname);
      setItemType(itemTypeName);
    }
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
        {menuList.map((text,index)=>(text[0] ==='')?(<Divider />):(
          <ListItem disablePadding key={'a'+index}
          onClick={toggleDrawer(anchor, false,text[0], text[1])}
          onKeyDown={toggleDrawer(anchor, false,text[0], text[1])}>
            <ListItemButton>
              <ListItemIcon> <ArrowRightIcon/> </ListItemIcon>
              <ListItemText primary={text[0]} />
            </ListItemButton>
          </ListItem>
        ))}

      </List>
      
    </Box>
  );
  return (

    <div>
      <React.Fragment key={'left'}>
        <Drawer
          anchor={'left'}
          open={openProp}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default TOC;
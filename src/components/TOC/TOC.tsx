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
}

const TOC: React.FC<TOCProps> = ({ openProp, setMenuOpen, setMenuName }) => {

  const toggleDrawer = (anchor: Anchor, open: boolean, menuname?:string) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setMenuOpen(open);
    if(menuname) setMenuName(menuname);
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
        {['Product', 'PFC'].map((text, index) => (
          <ListItem disablePadding key={'a'+index}
          onClick={toggleDrawer(anchor, false,text)}
          onKeyDown={toggleDrawer(anchor, false,text)}>
            <ListItemButton>
              <ListItemIcon> <ArrowRightIcon/> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Upper Tooling', 'Small Tooling', 'PE Workspace'].map((text, index) => (
          <ListItem disablePadding key={'b'+index}
            onClick={toggleDrawer(anchor, false,text)}
            onKeyDown={toggleDrawer(anchor, false,text)}>
            <ListItemButton>
              <ListItemIcon><ArrowRightIcon/></ListItemIcon>
              <ListItemText primary={text} />
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
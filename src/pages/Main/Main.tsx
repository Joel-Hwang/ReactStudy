import React, { useRef, useState } from 'react';

import './Main.css';
import FiveShot from '../FiveShot'
import TemporaryDrawer from '../../components/TemporaryDrawer';
import Header from '../../components/Header';

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuName, setMenuName] = useState("");
  return (
    <div>
      <Header handleMenuClick={setMenuOpen} title={menuName}></Header>
      <FiveShot></FiveShot>
      <TemporaryDrawer 
        openProp={menuOpen} 
        setMenuOpen={setMenuOpen} 
        setMenuName={setMenuName} />
      
    </div>
  );
};

export default Main;
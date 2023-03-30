import React, { useRef, useState } from 'react';

import './Main.css';
import Product from '../Product'
import ItemList from '../ItemList'
import TemporaryDrawer from '../../components/TemporaryDrawer';
import Header from '../../components/Header';

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuName, setMenuName] = useState("");
  return (
    <div>
      <Header handleMenuClick={setMenuOpen} title={menuName}></Header>
      <ItemList></ItemList>
      <TemporaryDrawer 
        openProp={menuOpen} 
        setMenuOpen={setMenuOpen} 
        setMenuName={setMenuName} />
      
    </div>
  );
};

export default Main;
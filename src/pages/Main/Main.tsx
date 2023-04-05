import React, { useRef, useState } from 'react';

import './Main.css';
import Product from '../Product'
import ItemList from '../ItemList'
import TOC from '../../components/TOC';
import Header from '../../components/Header';


const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuName, setMenuName] = useState("");
  //list, detail, edit
  const [mode, setMode] = useState("list");

  return (
    <div>
      <Header 
        handleMenuClick={setMenuOpen} 
        title={menuName}
        setMode={setMode} 
        mode={mode} />
      <ItemList></ItemList>
      <TOC 
        openProp={menuOpen} 
        setMenuOpen={setMenuOpen} 
        setMenuName={setMenuName} />
    </div>
  );
};

export default Main;
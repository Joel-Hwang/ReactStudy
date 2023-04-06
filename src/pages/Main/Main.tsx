import React, { useRef, useState } from 'react';

import './Main.css';
import ItemList from '../ItemList'
import TOC from '../../components/TOC';
import Header from '../../components/Header';


const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuName, setMenuName] = useState("");
  const [itemType, setItemType] = useState("");
  //list, detail, edit
  const [mode, setMode] = useState("list");

  return (
    <div>
      <Header 
        handleMenuClick={setMenuOpen} 
        title={menuName}
        mode={mode} 
        setMode={setMode} 
        itemType={itemType} 
        setItemType={setItemType} 
        />

      <ItemList 
        setMode={setMode} 
        mode={mode} />
      
      <TOC 
        openProp={menuOpen} 
        setMenuOpen={setMenuOpen} 
        setMenuName={setMenuName} 
        setItemType={setItemType}
        />
    </div>
  );
};

export default Main;
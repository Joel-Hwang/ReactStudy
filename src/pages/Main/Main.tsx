import React, { useRef, useState } from 'react';

import './Main.css';
import ItemList from '../ItemList'
import TOC from '../../components/TOC';
import Header from '../../components/Header';
import {ProductList,ProductDetail, ProductEdit} from '../../pages/Product';

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuName, setMenuName] = useState("");
  const [itemType, setItemType] = useState("");
  const [itemId, setItemId] = useState("");
  const [itemList, setItemList] = useState<Array<any>>([]);
  //list, detail, edit
  const [mode, setMode] = useState("list");

  const listView:{[key:string]:any} = {
    "Product":ProductList,
    "CS_PFC":ItemList,
    "":ItemList,
  }

  const detailView:{[key:string]:any} = {
    "Product":ProductDetail,
    "":ProductDetail,
  }

  const editView:{[key:string]:any} = {
    "Product":ProductEdit,
    "":ProductEdit,
  }

  const showBody = (mode:string) =>{
    switch(mode){
      case "":
      case "list":
        return React.createElement(listView[itemType],{setMode:setMode, mode:mode, itemList:itemList, setItemId:setItemId})
      case "detail":
        return React.createElement(detailView[itemType],{itemId:itemId})
        case "edit":
          return React.createElement(editView[itemType],{setMode:setMode, mode:mode, itemId:itemId})
    }
  }
  return (
    <div>
      <Header 
        handleMenuClick={setMenuOpen} 
        title={menuName}
        mode={mode} 
        setMode={setMode} 
        itemType={itemType} 
        setItemType={setItemType}
        setItemList={setItemList}
        />
      
      {showBody(mode)}
      
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
import React, { useRef, useState } from 'react';

import './Main.css';
import FiveShot from '../FiveShot'
import TemporaryDrawer from '../../components/TemporaryDrawer';
import Header from '../../components/Header';

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Header handleMenuClick={setMenuOpen}></Header>
      <TemporaryDrawer openProp={menuOpen} setMenuOpen={setMenuOpen}></TemporaryDrawer>
    </div>
  );
};

export default Main;
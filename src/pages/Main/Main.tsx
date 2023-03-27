import React, { useRef, useState } from 'react';

import './Main.css';
import FiveShot from '../FiveShot'
import TemporaryDrawer from '../../components/TemporaryDrawer';
import Header from '../../components/Header';

const Main = () => {
  const menuRef = useRef<HTMLHeadingElement>(null);
  const navRef = useRef<HTMLElement>(null);

  let [isMenuActive, setIsMenuActive] = useState(false);
  let [isMenuHover, setIsMenuHover] = useState(false);

  const menuClick = () => {
    setIsMenuActive(!isMenuActive);
    setIsMenuHover(false);
  };
  const handleMouseEnter = () => {
    if (isMenuActive) return;
    setIsMenuHover(true);

  };
  const handleMouseLeave = () => {
    setIsMenuHover(false);
  };

  return (
    <div>
      <Header></Header>
      <TemporaryDrawer></TemporaryDrawer>
    </div>
  );
};

export default Main;
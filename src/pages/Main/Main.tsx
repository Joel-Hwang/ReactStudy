import React, { useRef, useState } from 'react';

import './Main.css';
import FiveShot from '../FiveShot'
import TemporaryDrawer from '../../components/TemporaryDrawer';

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
      
      <TemporaryDrawer></TemporaryDrawer>
    </div>
  );
};

export default Main;
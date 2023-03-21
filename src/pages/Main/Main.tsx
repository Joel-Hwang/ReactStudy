import React,{useRef,useState} from 'react';

import './Main.css';
import FiveShot from '../FiveShot'

const Main = () => {
  const menuRef = useRef<HTMLHeadingElement>(null);
  const navRef = useRef<HTMLElement>(null);

  let [isMenuActive,setIsMenuActive] = useState(false);
  let [isMenuHover,setIsMenuHover] = useState(false);

  const menuClick = () =>{
    setIsMenuActive(!isMenuActive);
    setIsMenuHover(false);
  };
  const handleMouseEnter = () => {
    if(isMenuActive) return;
    setIsMenuHover(true);
    
  };
  const handleMouseLeave = () => {
    setIsMenuHover(false);
  }; 

  return (
    <div>
      <nav className={[isMenuActive?"menu-active":"",isMenuHover?"menu-hover":""].join(' ')} ref={navRef}>
        <h1 onClick={menuClick} ref={menuRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>MENU</h1>
        <ul>
          <li>Five Shot</li>
          <li>Upper Tooling 입고</li>
          <li>Upper Tooling Master</li>
          <li>PFC Preview</li>
          <li>Small Tooling</li>
        </ul>
      </nav>
      <main className={[isMenuActive?"menu-active":"",isMenuHover?"menu-hover":""].join(' ')} >
      <section>
        <br/><br/><br/>
        <FiveShot/>
      </section>
    </main>
    </div>
  );
};

export default Main;
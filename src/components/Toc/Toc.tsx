import React,{useRef} from 'react';
import './Toc.css';
type TocItem = {
  id: string;
  text: string;
  children?: TocItem[];
};



const Toc = () => {
  const menuRef = useRef<HTMLHeadingElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const menuClick = () =>{
  };

  return (
    <nav className="menu-activea" ref={navRef}>
      <h1 onClick={menuClick} ref={menuRef}>NAVBAR</h1>
      <ul>
        <li>HOME</li>
        <li>GALLERY</li>
        <li>TEAM</li>
        <li>SERVICES</li>
        <li>ABOUT</li>
        <li>WORK</li>
        <li>FAQ</li>
      </ul>
    </nav>
  );
};

export default Toc;
import React, { useState } from 'react';
import Camera from '../../components/Camera';
import ImageFileInput from '../../components/ImageFileInput';
import './FiveShot.css';

interface FiveShotProps {
  onLogin:() => void;
}

const FiveShot: React.FC<FiveShotProps> = ({onLogin}) => {
  return (
    <div>
        <h1>Five Shots</h1>
        <div>
          Search Area
          <input type='text' placeholder='Criteria a'></input>
          <input type='text' placeholder='Criteria b'></input>
          <input type='text' placeholder='Criteria c'></input>
          <br />
          <input type='text' placeholder='Criteria d'></input>
          <input type='text' placeholder='Criteria e'></input>
          <input type='text' placeholder='Criteria f'></input>
          <button>Search</button>
        </div>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div>
          <div className='flex-group'>
            <div className='horizontal lateral-view'>
              <ImageFileInput labelValue='Lateral View'/>
            </div>
            <div className='horizontal medial-view'>
            <ImageFileInput labelValue='Medial View'/>
            </div>
            <div className='horizontal bottom-view'>
              <ImageFileInput labelValue='Bottom View'/>
            </div>
          </div>
          <div className='flex-group'>
            <div className='vertical front-view'>Front View<Camera></Camera></div>
            <div className='vertical heel-view'>Heel View<Camera></Camera></div>
          </div>
        </div>
        
        
    </div>
  );
}

export default FiveShot;

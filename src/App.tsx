import React, { useState } from 'react';
import Login from './pages/Login'
import Main from './pages/Main'
import './App.css';

interface User {
  username: string;
  password: string;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      
      {!isLoggedIn? ( 
        <Login setIsLoggedIn={setIsLoggedIn} />):( 
        <Main/>)}
     
    </>
  );
}

export default App;

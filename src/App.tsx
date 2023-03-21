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

  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  return (
    <>
      {!isLoggedIn? ( 
        <Login onLogin={handleLogin} />):( 
        <Main/>)}
     
    </>
  );
}

export default App;

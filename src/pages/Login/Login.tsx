import React, { useState } from 'react';
import {API,md5, post} from '../../Util';

import { TextField, Button, Alert, AlertTitle } from '@mui/material';
import './Login.css'
interface LoginProps {
  setIsLoggedIn: (val:boolean) => void;
}

interface User {
  username: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({setIsLoggedIn }) => {
  const [user, setUser] = useState<User>({ username: '', password: '' });
  const [showError, setShowError] = useState(false);
  
  const handleClick = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    console.log(user);
    /*let result = await post(API.LOGIN,{userId:user.username,userPw:md5(user.password)});
    if(result && result.status == 200){
      sessionStorage.userId = result.data.userId;
      sessionStorage.keyed_name = result.data.keyed_name;
      setShowError(false);
      setIsLoggedIn(true);
    }else{
      setShowError(true);
      setIsLoggedIn(false);
    }*/
    //로그인 그냥 패스
    setIsLoggedIn(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <>
    <div className='login-container'>
      <h2>P L M</h2>
      <div className='input-area'>
        <div>
          <TextField
            id="username"
            name="username"
            label="ID"
            variant="standard"
            onChange={handleInputChange}
            value={user.username}
          />
        </div>
        <br />
        <div>
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            onChange={handleInputChange}
            value={user.password}
          />
        </div>
      </div>
      <div className='login-button'>
        <Button variant="contained" onClick={handleClick}>Log in</Button>
      </div>
      

    </div>
    <div style={ {position:'absolute', bottom:'50px', textAlign:'center', width:'100%'} }>
      <img src="/img/digital_navy_rgb_01_1.png" width={150}/>
    </div>
    {showError &&
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      Login error — <strong>check your account information!</strong>
    </Alert>
    }
    </>
  );
};

export default Login;
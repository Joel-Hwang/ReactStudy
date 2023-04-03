import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Paper, Button } from '@mui/material';
import './Login.css'
interface LoginProps {
  onLogin: () => void;
}

interface User {
  username: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [user, setUser] = useState<User>({ username: '', password: '' });

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    // 로그인 처리 코드
    console.log(user);
    axios.post('http://asdasd.asdasd',user).then(response => {}).catch(error =>{console.log(error);});
    onLogin();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <>
    <div className='login-container'>
      <h2>PLM</h2>
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
    </>
  );
};

export default Login;
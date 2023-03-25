import React, { useState } from 'react';
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
    onLogin();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log("name :" + name, "value : " + value);
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
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
  );
};

export default Login;
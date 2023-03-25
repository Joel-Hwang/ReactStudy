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
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 로그인 처리 코드
    console.log(user);
    onLogin();
  };

  return (
    <div className='login-container'>
      <h2>PLM</h2>

      <Paper className='input-area' variant="outlined">
        <div>
          <TextField id="outlined-basic" label="ID" variant="standard" />
        </div>
        <br/>
        <div>
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
        </div>
      </Paper>
      <div className='button-area'>
        <Button variant="contained">Log in</Button>
      </div>


    </div>
  );
};

export default Login;
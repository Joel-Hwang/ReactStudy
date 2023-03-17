import React, { useState } from 'react';
import './Login.css'
interface LoginProps {
    onLogin:() => void;
}

interface User {
    username: string;
    password: string;
}

const Login: React.FC<LoginProps> = ({onLogin}) => {
    const [user, setUser] = useState<User>({ username: '', password: '' });

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
    <div className="login-container">
      <form id="login-form" onSubmit={handleFormSubmit}>
        <h2>PLM</h2>
        <label htmlFor="username">아이디:</label>
        <input type="text" id="username" name="username" required value={user.username} onChange={handleInputChange} />
        <label htmlFor="password">비밀번호:</label>
        <input type="password" id="password" name="password" required value={user.password} onChange={handleInputChange} />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
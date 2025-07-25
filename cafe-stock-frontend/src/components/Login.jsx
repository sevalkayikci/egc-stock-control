import React, { useState } from 'react';
import '../styles/Login.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem('token', data.token); // token'ı sakla
        navigate('/dashboard'); // dashboard'a yönlendir
      } else {
        alert(data.message || 'Giriş başarısız.');
      }
    } catch (error) {
      alert('Sunucuya bağlanılamadı.');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h1 className="title">
          Ertaş Garden<br />Cafe Stok<br />Kontrol
        </h1>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifre"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Giriş Yap
        </button>
      </div>
    </div>
  );
};

export default Login;

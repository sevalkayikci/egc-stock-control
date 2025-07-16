import React from 'react';
import '../styles/Login.css'; 
import logo from '../assets/logo.png'; // Adjust the path as necessary

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h1 className="title">Ertaş Garden<br />Cafe Stok<br />Kontrol</h1>
        <input type="text" placeholder="Kullanıcı Adı" className="input" />
        <input type="password" placeholder="Şifre" className="input" />
        <button className="login-button">Giriş Yap</button>
      </div>
    </div>
  );
}

export default Login;

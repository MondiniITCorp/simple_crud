import './LoginComp.scss';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

export function LoginComp() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const encryptData = (data: string) => {
    const secretKey = import.meta.env.VITE_HASHPASS; // Use a secure key
    return CryptoJS.AES.encrypt(data, secretKey).toString();
  };

  const handleSubmit = async () => {
    const encryptedLogin = encryptData(login);
    const encryptedPassword = encryptData(password);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_HOST}/auth/login`, {
        username: encryptedLogin,
        password: encryptedPassword,
      });
      window.localStorage.setItem('token', response.data.access_token);
      window.location.href = '/';
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
      console.error('Error connecting account:', error);
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__content">
          <div className="login__content__default__login">
            <img src="" />
            <h1 className="login__title">Fazer Login em sua conta</h1>
            {error && <p className="error-message">{error}</p>}
            <label>
              <input
                type="name"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="name"
              />
            </label>
            <label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
              />
            </label>
            <button className="login__button" onClick={handleSubmit}>
              Proximo <ArrowForwardOutlinedIcon />
            </button>
          </div>
          <div className="login__new_account">
            Ainda não tem conta? <a href="/register">Cadastre-se</a>
          </div>
        </div>
      </div>
    </div>
  );
}

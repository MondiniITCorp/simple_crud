import axios from 'axios';
import { Navigate } from 'react-router-dom';


export function RequireAuth({ children }: any) {
  const token = window.localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_HOST}`,
  });

  function logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userData');
    window.location.href = '/login';
  }

  (async () => {
    await api.get('/auth/validateToken', config)
      .then((isValid) => {
        if (!isValid)
          logout();
      })
      .catch(() => {
        logout();
      });
  })();

  
  return token ? children : <Navigate to="/signin" replace />;
}

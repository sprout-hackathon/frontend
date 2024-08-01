import { useNavigate } from 'react-router-dom';
import { getCookie } from '../api/Cookies';

const useAuth = () => {
  const navigate = useNavigate();

  const token = getCookie('user');
  const isLoggedIn = !!token;

  const checkAuth = () => {
    if (!isLoggedIn) navigate('/login');
  };

  return { checkAuth };
};

export default useAuth;

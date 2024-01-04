// AuthRoute.js
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../Hooks/userHook';

const AuthRoute = ({ children, redirectTo, allowedWhenAuthenticated }) => {
  const { isTokenExpired } = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isTokenExpired() && allowedWhenAuthenticated) {
      navigate(redirectTo);
    }

    if (!isTokenExpired() && !allowedWhenAuthenticated) {
      navigate(redirectTo);
    }
  }, [isTokenExpired, location, redirectTo, allowedWhenAuthenticated]);

  return children;
};

export default AuthRoute;

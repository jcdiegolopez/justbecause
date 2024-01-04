// UserContext.js
import { createContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = (userData) => {
    setUser(userData);
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    <Navigate to={"/login"}/>
  };


  const isTokenExpired = () => {
    const token =  localStorage.getItem('token');
    const expirationDate = localStorage.getItem("expirationDate");
    if (!expirationDate || !token || new Date(expirationDate) < new Date()) {
      logoutUser();
      return true;
    }
    return false;
  };
  

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser, isTokenExpired }}>
      {children}
    </UserContext.Provider>
  );
};


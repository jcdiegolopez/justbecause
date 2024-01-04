// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./Router"; 
import { UserProvider } from './Context/UserContext';
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <Router />
    </UserProvider>
  </React.StrictMode>,
);

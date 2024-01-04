// Router.js
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from './App';
import AuthRoute from './auth/AuthRoute';
import HomePage from './Components/Home/HomePage';
import LoginPage from './Components/Login/LoginPage';
import RegisterPage from './Components/Login/RegisterPage';
import ShopPage from './Components/Shop/ShopPage';
import CartPage from './Components/Cart/CartPage';
import PaymentPage from './Components/Cart/PaymentPage';
import CartOutlet from './Components/Cart/CartOutlet';
import ProfilePage from './Components/ProfilePage';
import ErrorPage from './Components/Error/ErrorPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement:<ErrorPage/>,
      children: [
        { index: true, element: <Navigate to={"/home"} /> },
        { path: "home", element: <HomePage /> },
        { path: 'login', element: <AuthRoute redirectTo="/home" allowedWhenAuthenticated={false}><LoginPage /></AuthRoute> },
        { path: 'register', element: <AuthRoute redirectTo="/home" allowedWhenAuthenticated={false}><RegisterPage /></AuthRoute> },
        { path: 'shop', element: <ShopPage /> },
        {
          path: 'cart',
          element: <CartOutlet />,
          children: [
            { index: true, element: <CartPage /> },
            { path: 'payment', element: <AuthRoute redirectTo="/login" allowedWhenAuthenticated={true}><PaymentPage /></AuthRoute> },
          ],
        },
        { path: 'profile', element: <AuthRoute redirectTo="/login" allowedWhenAuthenticated={true}><ProfilePage /></AuthRoute> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

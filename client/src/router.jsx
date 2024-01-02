import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/Error/ErrorPage";
import { Navigate } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import LoginPage from "./Components/Login/LoginPage";
import RegisterPage from "./Components/Login/RegisterPage";
import ShopPage from "./Components/Shop/ShopPage";
import CartPage from "./Components/Cart/CartPage";
import PaymentPage from "./Components/Cart/PaymentPage";
import CartOutlet from "./Components/Cart/CartOutlet";

const LoggedIn = false;

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Navigate to={"/home"} /> },
        { path: "home", element: <HomePage /> },
        {
          path: "login",
          element: LoggedIn ? <Navigate to={"/home"} /> : <LoginPage />,
        },
        {
          path: "register",
          element: LoggedIn ? <Navigate to={"/home"} /> : <RegisterPage />,
        },
        {
          path: "shop",
          element: <ShopPage />,
        },
        {
          path: "cart",
          element: <CartOutlet/>,
          children: [
            { index: true, element: <CartPage /> },
            { path: "payment", element: LoggedIn ? <PaymentPage /> : <Navigate to={"/login"} /> },
          ]
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

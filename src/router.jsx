import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/Error/ErrorPage";
import { Navigate } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import LoginPage from "./Components/Login/LoginPage";
import ShopPage from "./Components/Shop/ShopPage";
import CartPage from "./Components/Cart/CartPage";


const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <Navigate to={"/home"}/>},
        {path: "home", element: <HomePage/>},
        {path: "login", element: <LoginPage/>},
        {path: "shop", element: <ShopPage/>},
        {path: "cart", element: <CartPage/>}
      ],
      
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
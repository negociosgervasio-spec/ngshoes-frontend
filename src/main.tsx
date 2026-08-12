import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/forms/Login.tsx';
import Signup from './pages/forms/Signup.tsx';
import Home from './pages/Home.tsx';
import App from './App.tsx';
import Category from './pages/Category.tsx';
import Product from './pages/Product.tsx';
import Cart from './pages/Cart.tsx';
import Profile from './pages/Profile.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/loja",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cadastro",
        element: <Signup />,
      },
      {
        path: "/categoria/:category",
        element: <Category />
      },
      {
        path: "/produto/:id",
        element: <Product />
      },
      {
        path: "/carrinho",
        element: <Cart/>
      },
      {
        path: "/perfil",
        element: <Profile/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

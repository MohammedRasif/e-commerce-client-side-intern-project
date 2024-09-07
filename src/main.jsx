import { createRoot } from 'react-dom/client'
import './index.css' 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import ErrorPage from './assets/ErrorPage/ErrorPage.jsx';
import Home from './assets/Component/Home/Home.jsx';
import ProductTab from './assets/Component/Product/ProductTab.jsx';
import Login from './assets/Component/Login/Login.jsx';
import SignIn from './assets/Component/SignIn/SignIn.jsx';
import AuthProvider from './assets/AuthProvider/AuthProvider.jsx';
import OderProduct from './assets/Component/OderProduct/OderProduct.jsx';
import React from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      }
      ,
      {
        path:"/product",
        element:<ProductTab></ProductTab>
      }
      ,
      {
        path:"/login",
        element:<Login></Login>
      }
      ,
      {
        path:"/signIn",
        element:<SignIn></SignIn>
      }
      ,
      {
        path:"/oderProduct",
        element:<OderProduct></OderProduct>,
        loader: () => fetch('http://localhost:5000/oderProduct')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

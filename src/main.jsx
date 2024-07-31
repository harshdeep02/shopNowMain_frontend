import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Category } from './Components/Category.jsx';
import { Home } from './Components/Home.jsx';
import { ProductDetails } from './Components/ProductDetails.jsx';
import { Footer } from './Components/Footer.jsx';
import SignInForm from './Components/SignInForm.jsx';
import { Login } from './Components/Login.jsx';
import { Cart } from './Components/Cart.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
          { path: "/",
            element: <Home />
          },
            
    ]
  },
  { path: "/:category",
    element: <Category />
  },
  { path: "/:category/:category/",
    element: <ProductDetails />
  },
  { path: "/signup",
    element: <SignInForm />
  },
  { path: "/login",
    element: <Login />
  },
  { path: "/cart",
    element: <Cart />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

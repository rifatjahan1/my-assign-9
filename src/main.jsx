import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './app.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './layouts/Root';
import Home from './pages/home/Home';
import Login from './component/login/Login';
import Register from './component/register/Register';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import AuthProvider from './context/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path: 'login',
        Component:Login

      },
      {
        path: 'register',
        Component:Register

      },
      {
        path: 'contact',
        Component:Contact

      },

      {
        path: 'about',
        Component:About

      },


    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

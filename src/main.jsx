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
import CompanyDetails from './component/company/CompanyDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <p>Loading, please wait.......</p>,
        loader: () => fetch('../data.json').then(res => res.json()),

      },
      {
        path: '/login',
        Component: Login

      },
      {
        path: '/register',
        Component: Register

      },
      {
        path: '/contact',
        Component: Contact

      },

      {
        path: '/about',
        Component: About

      },
       {
        path: '/companydetails/:id',
        Component: CompanyDetails

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

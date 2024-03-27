import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store'
import Login from 'pages/Login';
import Cadastro from 'pages/Cadastro';
import Painel from 'pages/Painel';
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Painel />
    },
    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/Cadastro",
        element: <Cadastro />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

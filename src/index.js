import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';   
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/layout.css'; 
import { createRoot } from "react-dom/client";
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Basic from './layout/basic.js';
import Home from './home/home.js';
import Comparacion from './catalogo/components/comparisionMain.js';
//import Conocenos from './conocenos/conocenos.js';
//import Contactanos from './contactanos/contactanos.js';

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 500);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Basic />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/catalogo',
                element: <Comparacion  />,
            },/*
            {
                path: 'Conocenos',
                element: <Conocenos/>
            }, 
            {
                path: 'Contactanos',
                element: <Contactanos/>
            },
            {
                path: 'Politicas de Privacidad',
                element: <Politicas/>
            },*/
        ],
    },
]);

const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);
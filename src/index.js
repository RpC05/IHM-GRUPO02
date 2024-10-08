import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';   
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/layout.css'; 
import { createRoot } from "react-dom/client";
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Basic from './layout/basic.js';
import Home from './home/home.js';
import Comparacion from './catalogo/components/comparisionMain.js';
import Conocenos from './conocenos/conocenos.js';
import Terminos from './terminos/terminos.js';
import Contactanos from './contactanos/contactanos.js';
import Novedades from './novedades/novedades.js';
import Single from './novedades/single.js';

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
                path: '/novedades',
                element: <Novedades />
            },
            {
                path: '/catalogo',
                element: <Comparacion  />,
            },
            {
                path: '/conocenos',
                element: <Conocenos/>
            },
            {
                path: '/terminos',
                element: <Terminos/>
            }, 
            {
                path: '/contactanos',
                element: <Contactanos/>
            }, 
            {
                path: "detalle/:slug",
                element: <Single />,
            }, 
        ],
    },
]);

const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);
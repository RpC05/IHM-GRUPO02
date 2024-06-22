import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles/layout.css';
import { createRoot } from "react-dom/client"; 
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"; 
import Basic from './layout/basic'; 

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
                path: '',
                element: <>
                    <div className="col-md-8"> 
                    </div>
                    <div className="col-md-4"> 
                    </div>
                </>
            }, 
        ],
    }, 
]);

const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);
import { createBrowserRouter } from "react-router-dom";
import Sesion from "../Sesion.jsx";
import Principal from "../principal.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Sesion />,
    },
    {
        path: "/principal",
        element: <Principal />,
    }
])
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import App from "../App";
import Authentication from "../components/Authentication";

export const router = createBrowserRouter([
    {
        path: "/",
        // element: <App />,
        element: <Authentication />,
    },
]);

export const Router = () => {
    return <RouterProvider router={router} />;
};

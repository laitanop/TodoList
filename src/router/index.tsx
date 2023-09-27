import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);

export const Router = () => {
    return <RouterProvider router={router} />;
};

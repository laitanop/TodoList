import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";
import Authentication from "../components/Authentication";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Authentication />,
    },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        ),
    },
]);

export const Router = () => {
    return <RouterProvider router={router} />;
};

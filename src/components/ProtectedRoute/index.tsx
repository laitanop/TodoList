import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
    children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props): JSX.Element | null => {
    const authSaved = localStorage.getItem("auth");
    const auth = JSON.parse(authSaved);

    if (!auth) {
        return <Navigate to="/login" />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;

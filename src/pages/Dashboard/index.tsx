import { Button } from "@mui/material";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import React from "react";
import { SUPABASE_URL, SUPABASE_KEY } from "../../helpers/constants";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        localStorage.removeItem("auth");
        console.log(error);
        navigate("/login");
    };
    return (
        <div>
            dashboard
            <Button onClick={() => handleLogout()}>logout </Button>
        </div>
    );
}

export default Dashboard;

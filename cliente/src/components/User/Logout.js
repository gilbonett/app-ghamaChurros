import React, { useEffect } from "react";
import { useNavigate } from "react-router";

function LogOut() {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.clear();
        navigate("/");
    }, [navigate]);

   
    return <div></div>;
}

export default LogOut;

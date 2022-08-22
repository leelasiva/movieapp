import React from "react";
import { useNavigate } from "react-router-dom";
import './admin.css';

const Admin = () => {
    const navigate = useNavigate();

    const logoutFn = () => {
        localStorage.clear();
        navigate("/login");
    };
    const handleClientPage=()=>{
      navigate("/client");
    }

    return (
        <div className="backgroundImg">
            <h1>Welcome Admin : {localStorage.getItem("name")}</h1>
            <div>
            <button className='btn btn-primary p-2 m-2' onClick={logoutFn}>
                Logout
            </button>
            
            <button className='btn btn-warning p-2 m-2' onClick={handleClientPage}>
            ClientPage
        </button>
        </div>
        </div>
    );
};
export default Admin;
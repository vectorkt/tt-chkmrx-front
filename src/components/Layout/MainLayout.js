
import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {  getTitles } from "../../utils/api/api";
import Navbar from "../Elements/Navbar/Navbar";
import { LoginContext } from "../../App";


const MainLayout = () => {
    
    const [titles, setTitles] = useState();
    const { loginState, setLoginState } = useContext(LoginContext)

    const fetchTitles = async () => {
        const data = await getTitles();            
        setTitles(data);
    }


    useEffect(() => {
        console.log("navbar called")
        fetchTitles()
    }, [loginState.isLogged])


    return (
        <>
            {titles ? <Navbar isLoggedIn={loginState.isLogged} titles={titles} /> : <p>Loading...</p>}

            <div className="container-md d-flex flex-column justify-content-center">
                <p>Hello Layout</p>
                <br />
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout;
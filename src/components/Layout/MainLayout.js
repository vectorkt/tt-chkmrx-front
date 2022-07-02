
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import { getLogs, getTitles } from "../../utils/api/api";
import Button from "../Elements/Button/Button";
import Input from "../Elements/Input/Input";
import Table from "../Elements/Table/Table";
import Navbar from "../Elements/Navbar/Navbar";


const MainLayout = () => {
    
    const [titles, setTitles] = useState();

    const fetchTitles = async () => {
        const data = await getTitles();            
        setTitles(data);
    }


    useEffect(() => {
        fetchTitles()
    }, [])


    return (
        <>
            {titles ? <Navbar isLoggedIn={true} titles={titles} /> : <p>Loading...</p>}

            <div className="container-md d-flex flex-column justify-content-center">
                <p>Hello Layout</p>
                <br />
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout;
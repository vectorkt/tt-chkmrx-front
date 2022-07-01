
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import { getLogs, getTitles } from "../../utils/api/api";
import Button from "../Elements/Button/Button";
import Input from "../Elements/Input/Input";
import Table from "../Elements/Table/Table";
import Navbar from "../Elements/Navbar/Navbar";


const MainLayout = () => {

    const [token, setToken] = useState();

    const [titles, setTitles] = useState();

    useEffect(() => {
        (async () => {
            const data = await getTitles();            
            setTitles(data);
        })()
    }, [])


    const shoot = () => {
        alert("Great Shot!");
    }

    const rowHandler = (event) => {
        var target = event.target;
        var parent = target.parentElement;
        alert(parent.getAttribute('data'));
    }

    const [inputVal, setInputVal] = useState('')


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
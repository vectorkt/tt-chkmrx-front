import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../features/Home/Home";
import Project from "../features/Project/Project";

const AppRoutes = () => {

    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home/>} />
                        <Route path="projects/:project" element={<Project/>} />
                        <Route path="*" element={<Home />} />
                    </Route>
                </Routes>

            </BrowserRouter>
        </>
    )
}


export default AppRoutes
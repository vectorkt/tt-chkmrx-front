import React from "react";
import { Link } from "react-router-dom";
import uniqid from 'uniqid';


const Navbar = ({ isLoggedIn, titles }) => {



    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">FootPrint</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">{isLoggedIn ? "Home" : "Latest Report"}</Link>
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                        </li>
                        {titles && titles.map(
                            title =>
                                <li key={uniqid()} className="nav-item">
                                    <Link className="nav-link" to={`/projects/${title}`}>{title}</Link>
                                </li>

                        )}
                    </ul>

                    {isLoggedIn ?
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Logout</Link>
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            </li>
                        </ul>
                        :
                        null
                    }
                </div>
            </div>
        </nav >
    )




}

export default Navbar
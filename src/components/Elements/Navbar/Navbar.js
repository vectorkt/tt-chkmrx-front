import React from "react";
import { Link } from "react-router-dom";
import uniqid from 'uniqid';
import SignOut from "../../SignOut/SignOut";
import FadeIn from 'react-fade-in';

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
                            <Link className="nav-link active" to="/">{isLoggedIn ? "Latest Reports" : "Sign In"}</Link>
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                        </li>
                        {titles && titles.map(
                            title =>
                                <FadeIn key={uniqid()} transitionDuration={500} delay={250}>
                                    <li key={uniqid()} className="nav-item">
                                        <Link className="nav-link" to={`/projects/${title}`}>{title}</Link>
                                    </li>
                                </FadeIn>
                        )}

                    </ul>

                    {isLoggedIn ?
                        <SignOut />
                        :
                        null
                    }
                </div>
            </div>
        </nav >
    )




}

export default Navbar
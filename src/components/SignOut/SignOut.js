import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../App";

const SignOut = () => {

    const { loginState, setLoginState } = useContext(LoginContext);

    const signOutHandler = () => {
        setLoginState({...loginState, isLogged: false})
    }

    return (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link className="nav-link active" onClick={signOutHandler} to="/">Sign Out</Link>
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            </li>
        </ul>

    )

}

export default SignOut
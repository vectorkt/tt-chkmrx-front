import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../App";
import { removeAuthCookie, removeLoginCookie } from "../../utils/cookies/cookies";

const SignOut = () => {

    const { loginState, setLoginState } = useContext(LoginContext);

    const signOutHandler = () => {
        removeLoginCookie()
        removeAuthCookie()
        setLoginState({...loginState, isLogged: false})
    }

    return (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link className="nav-link active" onClick={signOutHandler} to="/">Sign Out</Link>
            </li>
        </ul>

    )

}

export default SignOut
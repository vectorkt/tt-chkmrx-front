import React, { useContext, useState } from "react"
import { LoginContext } from "../../App";
import Cookies from 'universal-cookie';
import { getAuth } from "../../utils/api/api";

const SignIn = () => {

    const { loginState, setLoginState } = useContext(LoginContext);
    const [errorMsg, setErrorMsg] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const setAuthCookie = (token) => {

        const cookies = new Cookies();
        cookies.set('auth', token, { path: '/', sameSite: "strict" },);
    }


    const logInSubmitHandler = async (event) => {

        event.preventDefault();

        console.log("login state before:" + loginState)

        const response = await  getAuth(email, password);

        console.log(response)

        if (response.success) {
            //set token here
            console.log(JSON.stringify(loginState))
            console.log("login state before:" + loginState.isLogged)
            setAuthCookie(response.accessToken)
            // setIsLogged(true);                   
            setLoginState({ ...loginState, isLogged: true });
        }
        else {
            console.log("wrong")
            setErrorMsg("Something went wrong...")
        }
    }



    return (
        <form className="w-25">
            <div className="mb-2">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    value={email}
                    onChange={e => { setEmail(e.target.value) }}
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                    value={password}
                    onChange={e => { setPassword(e.target.value) }}
                />
            </div>
            <button type="submit" className="btn btn-primary"
                onClick={(e) => logInSubmitHandler(e)}
            >Submit</button>
            {errorMsg && <span className={"alert alert-danger"} role="alert">{errorMsg}</span>}
        </form>
    )
}

export default SignIn;




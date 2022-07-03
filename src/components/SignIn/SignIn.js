import React, { useContext, useState } from "react"
import { LoginContext } from "../../App";
import { getAuth } from "../../utils/api/api";
import { setAuthCookie, setLoginCookie } from "../../utils/cookies/cookies";

const SignIn = () => {

    const { loginState, setLoginState } = useContext(LoginContext);
    const [errorMsg, setErrorMsg] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logInSubmitHandler = async (event) => {

        event.preventDefault();

        const response = await getAuth(email, password);
        console.log(response)
        if (response.success) {
            setAuthCookie(response.accessToken);
            setLoginCookie(true);
            setLoginState({ ...loginState, isLogged: true });
        }
        else {
            setErrorMsg("Something went wrong...")
        }
    }

    return (
        <div className={"d-flex justify-content-center align-items-center mb-4"}>
            <form className="card p-4 w-25">
                <div className="mb-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">User</label>
                    <input autoFocus type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={email}
                        onChange={e => { setEmail(e.target.value) }}
                    />
                    {errorMsg && <div id="emailHelp" className="form-text" style={{ color: "red" }}>{errorMsg}</div>}
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
            </form>
        </div>
    )
}

export default SignIn;




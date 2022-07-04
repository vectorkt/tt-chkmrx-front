import React, { useContext, useState } from "react"
import { LoginContext } from "../../App";
import { getAuth } from "../../utils/api/api";
import { setAuthCookie, setLoginCookie } from "../../utils/cookies/cookies";

/**
 * The sign in component and functionality for the page.
 * If input is submitted, this component makes an API call to the backend for the security token.
 * It then updates the cookies: one with the authorization token and the other with a login status.
 */
const SignIn = () => {

    const { loginState, setLoginState } = useContext(LoginContext);
    const [errorMsg, setErrorMsg] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logInSubmitHandler = async (event) => {

        event.preventDefault();

        const response = await getAuth(email, password);

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

                    <label htmlFor="InputUser" className="form-label">User</label>

                    <input autoFocus type="text" className="form-control" id="InputUser"
                        value={email}
                        onChange={e => { setEmail(e.target.value) }}
                    />

                    {errorMsg && <div id="emailHelp" className="form-text" style={{ color: "red" }}>{errorMsg}</div>}

                </div>
                <div className="mb-3">

                    <label htmlFor="InputPassword" className="form-label">Password</label>

                    <input type="password" className="form-control" id="InputPassword"
                        value={password}
                        onChange={e => { setPassword(e.target.value) }}
                    />

                </div>

                <button type="submit" className="btn btn-primary"
                    onClick={(e) => logInSubmitHandler(e)}
                >
                    Submit
                </button>
                
            </form>
        </div>
    )
}

export default SignIn;




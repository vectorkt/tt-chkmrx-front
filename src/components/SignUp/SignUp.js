import React, { useState } from "react"
import Input from "../Elements/Input/Input";

const SignUp = ({ errorMsg, submitHandler }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                onClick={(e) => submitHandler(e, email, password)}
            >Submit</button>
            {errorMsg && <span className={"alert alert-danger"} role="alert">{errorMsg}</span>}
        </form>
    )
}

export default SignUp;




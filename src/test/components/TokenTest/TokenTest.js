import React, { useEffect, useState } from "react"
import axios from "axios";

const TokenTest = () => {

    const [token, setToken] = useState()

    const getAuthorization = async () => {
        const body = {
            "username": "kyle"
        };

        try {
            const response = await axios
                .post("http://localhost:4000/testtokengeneration",
                    body,
                    {
                        headers: {
                            // 'Authorization': 'Basic xxxxxxxxxxxxxxxxxxx',
                            'Content-Type': 'application/json'
                        }
                    }
                );

            console.log(response)
            console.log(response.data)
            console.log(response.data.accessToken)
            return response.data.accessToken
        }
        catch (err) {
            console.log(err)
        }
    }


    const [tokenVerified,setTokenVerified] = useState();

    const getInformation = async () => {
        try {

            const auth = `Bearer ${token}`;
            console.log(auth)
            const body = {
                "username": "kyle"
            };

            const response = await axios
                .post("http://localhost:4000/testtoken",
                    body,
                    {
                        headers: {
                            'Authorization': auth,
                            'Content-Type': 'application/json'
                        }
                    }
                );

            console.log(response)
            console.log(response.data)
            return response.data

        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        (async () => {
            const returnedToken = await getAuthorization();
            console.log(returnedToken)
            setToken(returnedToken)
        })()
    }, [])



    useEffect(() => {

        (async () => {

            if (token) {

                console.log("we have a token")
                console.log(token)  
                const message = await getInformation();
                console.log(message)
                setTokenVerified(message)
    
            }


            
            
            
        })()


    }, [token])
    /* */

    return (
        tokenVerified ?
        <p>{tokenVerified}</p>
        :
        <p>Hello world</p>
    )

}


export default TokenTest;
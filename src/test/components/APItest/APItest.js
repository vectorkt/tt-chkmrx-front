import React, { useEffect, useState } from "react"
import axios from "axios";

const APItest = () => {

    const [test, setTest] = useState()

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:4000/test");
            console.log(response)
            setTest(response.data)
        }
        catch (err) {
            console.log('fetchData throws error')
            console.log(err)
        }
    }


    const [tests, setTests] = useState()

    const fetchData2 = async () => {

        try {
            const response = await axios.get("http://localhost:4000/tests");
            console.log(response)
            console.log(response.data)
            setTests(response.data)
        }
        catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        fetchData2()

    }, [])
    
    return (
        test || tests ?
            (
                test ?
                    <p>{test}</p>
                    :
                    <p>{tests[1].username}</p>
            )
            :
            <p>Hello world</p>
    )

}


export default APItest;
import axios from "axios";
import { getAuthCookie } from "../cookies/cookies";
import { hashPassword } from "../hash/hash";



const getTitles = async () => {

    try {
        const response = await axios
            .post("http://localhost:4000/projecttitles",
                {body:null},
                {
                    headers: {
                        'Authorization': `Bearer ${getAuthCookie()}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

        return response.data
    }
    catch (err) {
        console.log(err)
        return null;
    }

}


const getLogs = async (project = "") => {
    const body = {
        "project": project
    };

    try {
        const response = await axios
            .post("http://localhost:4000/logs",
                body,
                {
                    headers: {
                        'Authorization': `Bearer ${getAuthCookie()}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

        return response.data
    }
    catch (err) {
        console.log(err)
        return null;
    }
}


const getAuth = async (user, password) => {
    const body = {
        user:
        {
            "user": user,
            "password": hashPassword(password)
        }
    };

    try {
        const response = await axios
            .post("http://localhost:4000/login",
                body,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

        return response.data
    }
    catch (err) {
        console.log(err)
        return err;
    }
}



export { getTitles, getLogs, getAuth }
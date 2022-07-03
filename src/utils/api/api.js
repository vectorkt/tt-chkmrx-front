import axios from "axios";
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import { getAuthCookie } from "../cookies/cookies";



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
            "password": Base64.stringify(sha256(password))
        }
    };

    try {
        const response = await axios
            .post("http://localhost:4000/login",
                body,
                {
                    headers: {
                        // 'Authorization': 'Basic xxxxxxxxxxxxxxxxxxx',
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
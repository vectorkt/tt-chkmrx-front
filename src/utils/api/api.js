import axios from "axios";
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import Cookies from 'universal-cookie';


const getAuthCookie = () =>{
    const cookies = new Cookies();
    try{
        return cookies.get('auth');
    }
    catch(err){
        console.log(err)
    }
}

const getTitles = async () => {

    try {
        const response = await axios
            .post("http://localhost:4000/projects",

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
                        // 'Authorization': 'Basic xxxxxxxxxxxxxxxxxxx',
                        'Content-Type': 'application/json'
                    }
                }
            );

        return response.data
    }
    catch (err) {
        console.log(err)
    }
}


const getAuth = async (email, password) => {
    const body = {
        user:
        {
            "email": email,
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
    }
}



export { getTitles, getLogs, getAuth }
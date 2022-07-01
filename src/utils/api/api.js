import axios from "axios";

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
            "password": password
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
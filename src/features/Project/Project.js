import React from "react";
import { useParams } from "react-router-dom";



const Project = () => {
    let params = useParams()

    return (
        <>
            <p>Project {params.project}</p>
        </>
    )

}


export default Project;
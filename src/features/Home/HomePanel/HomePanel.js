import React from "react";
import Input from "../../../components/Elements/Input/Input";
import HomeRow from "../HomeRow/HomeRow";

const HomePanel = ({ latestLogs }) => {

    return (
        <>
            {/* <div className={"d-flex justify-content-center align-items-center"}>
                <Input placeholder={"Find a project.."} className={"w-50"}/>
            </div> */}
            {latestLogs.map(
                (item) => { return <HomeRow item={item} /> }
            )}
        </>
    )

}

export default HomePanel;
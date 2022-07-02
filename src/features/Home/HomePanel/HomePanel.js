import React from "react";
import Input from "../../../components/Elements/Input/Input";
import ChartsRow from "../../../components/Elements/ChartsRow/ChartsRow";
import uniqid from 'uniqid';

const HomePanel = ({ searchValue, searchHandler, latestLogs }) => {

    return (
        <>
            <div className={"d-flex justify-content-center align-items-center mb-4"}>

                <Input
                    value={searchValue}
                    handler={searchHandler}
                    placeholder={"Find a project.."}
                    className={"w-50"}
                />
                
            </div>

            {latestLogs.map(
                (item) => { return <ChartsRow key={uniqid()} title={item.project} item={item} timeSlice={item.version} /> }
            )}
        </>
    )

}

export default HomePanel;
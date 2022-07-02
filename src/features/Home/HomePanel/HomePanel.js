import React, { memo } from "react";
import ChartsRow from "../../../components/Elements/ChartsRow/ChartsRow";
import uniqid from 'uniqid';
import { Link } from "react-router-dom";

const HomePanel = ({ filteredLogs }) => {

    return (
        <>
            {filteredLogs.map(
                (item) => {
                    return (
                        
                        <Link className="nav-link" to={`/projects/${item.project}`}>
                            <ChartsRow key={uniqid()} title={item.project} item={item} timeSlice={item.version} />
                        </Link>
                    )
                }
            )}
        </>
    )

}

export default memo(HomePanel);
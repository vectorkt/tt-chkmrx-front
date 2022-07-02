import React, { memo } from "react";
import Input from "../../../components/Elements/Input/Input";
import ChartsRow from "../../../components/Elements/ChartsRow/ChartsRow";
import uniqid from 'uniqid';

const HomePanel = ({ searchValue, searchHandler, filteredLogs }) => {

    return (
        <>


            {filteredLogs.map(
                (item) => { return <ChartsRow key={uniqid()} title={item.project} item={item} timeSlice={item.version} /> }
            )}
        </>
    )

}

export default memo(HomePanel);
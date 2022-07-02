import React, { memo } from "react";
import ChartsRow from "../../../components/Elements/ChartsRow/ChartsRow";
import uniqid from 'uniqid';
import { Link } from "react-router-dom";
import FadeIn from 'react-fade-in';

const HomePanel = ({ filteredLogs }) => {

    return (
        <>
            <FadeIn transitionDuration={500} delay={250}>
                {filteredLogs.map(
                    (item) => {
                        return (

                            <Link key={uniqid()} className="nav-link" to={`/projects/${item.project}`}>
                                <ChartsRow key={uniqid()} title={item.project} item={item} timeSlice={item.version} />
                            </Link>
                        )
                    }
                )}
            </FadeIn>
        </>
    )

}

export default memo(HomePanel);
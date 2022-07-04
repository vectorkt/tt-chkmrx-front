import React from "react";
import uniqid from 'uniqid';


const Table = ({ className, header, body, data, rowClickHandler, hoverEnterHandler, hoverLeaveHandler }) => {

    return (
        <table
            className={
                `${className ? "table table-striped " + className : "table table-striped"}${(rowClickHandler || hoverEnterHandler) ? " table-hover" : ""}`
            }
        >
            <thead>
                <tr>
                    {header &&
                        header.map(
                            elem => <th key={uniqid()} scope="col">{elem}</th>
                        )}
                </tr>
            </thead>

            <tbody>
                {body.map(
                    (row, index) =>
                        <tr
                            key={uniqid()}
                            onClick={rowClickHandler ? rowClickHandler : null}
                            onMouseEnter={hoverEnterHandler ? hoverEnterHandler : null}
                            onMouseLeave={hoverLeaveHandler ? hoverLeaveHandler : null}
                            style={(rowClickHandler || hoverEnterHandler) ? { cursor: "pointer" } : null}
                            data={data[index]}
                        >
                            {row.map(
                                col => <td key={uniqid()}>{col}</td>
                            )}
                        </tr>
                )}

            </tbody>
        </table>
    )

}



export default Table;
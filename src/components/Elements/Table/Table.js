import React from "react";
import uniqid from 'uniqid';


const Table = ({ className, header, body, rowHandler, data }) => {

    return (
        <table
            className={
                `${className ? "table table-striped " + className : "table table-striped"}${rowHandler ? " table-hover" : ""}`
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
                            onClick={rowHandler ? rowHandler : null}
                            style={rowHandler ? { cursor: "pointer" } : null}
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
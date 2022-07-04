import React from "react";
import uniqid from 'uniqid';

/**
 * The project panel displaying summarized data for a particular project.
 * It contains a top chart, a table, and a bottom chart.
 * @param className String, additional classes.
 * @param header List<String>, the list of headers to display.
 * @param body List<List<String>>, matrix of string to display.
 * @param data List<List<String>>, data associated with each row..
 * @param rowClickHandler Function, executed when clicking on a row.
 * @param hoverEnterHandler Function, executed when hovering on a row.
 * @param hoverLeaveHandler Function, executed when leaving the row with the cursor.
 */
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
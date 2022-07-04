import React from "react";

/**
 * A basic loading spinner
 * @param size String, boostrap class i.e. "w-50"
 */

const Loading = ({ size }) => {
    return (
        <div className="text-center">
            <div
                className="spinner-border text-primary"
                style={{ width: size, height: size }}
                role="status"
                data-testid="Loading"
            >
                <span className="visually-hidden">
                    Loading...
                </span>
            </div>
        </div>
    )
}


export default Loading;
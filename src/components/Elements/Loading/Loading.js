import React from "react";

const Loading = ({ size }) => {
    return (
        <div className="text-center">
            <div className="spinner-border text-primary" style={{ width: size, height: size }} role="status" data-testid="Loading">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}


export default Loading;
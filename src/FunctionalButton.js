import React from "react";


export const FunctionalButton = ({ onButtonClick, times }) => {
    return (
        <button onClick={onButtonClick('functional')}>
            functional, times: {times}
        </button>
    )
};


export default FunctionalButton;
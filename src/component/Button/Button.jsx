import React from "react";
import './Button.css';

function Button(props)
{
    return (
        <>
            <button className="saveButton" onClick={props.onClick}>Save Task</button>
        </>
    )
}

export default Button;
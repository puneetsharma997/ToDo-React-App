import React from "react";
import './Input.css';

function Input(props, ref)
{
    return (
        <>
            <input value={props.value} onChange={props.onChange} placeholder={props.placeholder} ref={ref}></input>
        </>
    )
}

const FInput = React.forwardRef(Input)

export default FInput;
import React from "react";

const Label = (props) => {
    return (
        <label htmlFor={props.htmlFor} className="text-white">
            {props.label}
        </label>
    );
};

export default Label;

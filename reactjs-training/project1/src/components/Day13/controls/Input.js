import React from "react";

const Input = (props) => {
    
    const { 
        type = "text", 
        placeholder, 
        value, 
        name, 
        onInputChange = () => {}
    } = props;

    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onInputChange}
            value={value}
            name={name}
            className="form-control my-1"
        />
    );
};

export default Input;

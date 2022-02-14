import React from 'react';

const Button = (props) => {
    const {
        type = 'primary',
        onClick = () => {}
    } = props;

    return (
        <button className={`btn btn-${type}`} onClick={onClick}>
            {props.children}
        </button>
    );
}

export default Button;

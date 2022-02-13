import React, { useState } from 'react';

const Stylecomp = () => {

    const [cssStyles, setCssStyles] = useState({});
    const [cssClass, setCssClass] = useState('');
    const myStyle = {'color': 'rebeccapurple'};

    const handleClick = () => {
        setCssStyles({backgroundColor: 'rebeccapurple'});
        setCssClass('bg-success text-white');
    }

    return (
        <div>
            <h3 style={{'color': 'red'}}>Inline CSS</h3>
            <h3 style={{...myStyle, 'backgroundColor': 'yellow'}}>Inline CSS using Variable</h3>
            
            <h3 style={cssStyles}>Dynamic CSS on Click event</h3>
            <h3 className={cssClass}>Dynamic Class</h3>
            <button onClick={handleClick}>Change Styles</button>
        </div>
    );
}

export default Stylecomp;

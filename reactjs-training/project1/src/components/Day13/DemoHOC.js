import React from 'react';
import HOC from './HOC';

const DemoHOC = () => {
    return (
        <div>
            <h3>Inner Component wrapped by HOC</h3>
        </div>
    );
}


// When HOC return a Class Component
// export default new HOC(DemoHOC);

// When HOC return a Functional Component
export default HOC(DemoHOC);

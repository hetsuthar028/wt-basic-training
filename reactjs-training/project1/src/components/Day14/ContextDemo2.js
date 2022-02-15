import React, { useContext } from 'react';
import { DemoContext } from './ContextDemo';

const Contextdemo2 = () => {

    const {data} = useContext(DemoContext);

    return (
        <div>
            Data from Context - {data}
        </div>
    );
}

export default Contextdemo2;

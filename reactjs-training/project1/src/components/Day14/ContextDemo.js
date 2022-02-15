import React, { createContext } from 'react';
import Contextdemo2 from './ContextDemo2';

export const DemoContext = React.createContext();

const Contextdemo = () => {

    let data = "This is the data from the ContextDemo Component"

    return (
        <div>
            <DemoContext.Provider value={{data}}>
                <Contextdemo2 />
            </DemoContext.Provider>
        </div>
    );
}

export default Contextdemo;

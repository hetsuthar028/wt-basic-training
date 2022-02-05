import React, {useState, useEffect} from 'react';

const Funcomplifecycle = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("useEffect called");
    })

    const handleCount = () => {
        setCounter((prevCount) => prevCount +1);
    }

    return (
        <div>
            <h3>Counter - {counter} </h3>
            <button className='btn btn-info' onClick={handleCount}>Count</button>
        </div>
    );
}

export default Funcomplifecycle;

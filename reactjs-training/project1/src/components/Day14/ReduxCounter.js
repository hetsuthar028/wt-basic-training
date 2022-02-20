import React, { useState, useEffect } from 'react';
import store from '../../redux/store/store';
import Button from '../Day13/controls/Button';
import { increaseCounter, decreaseCounter } from '../../redux/action/counter';

const Reduxcounter = () => {

    const [counter, setCounter] = useState(0);

    const handleCounterIncrease = () => {
        store.dispatch(increaseCounter(2))
    }

    const handleCounterDecrease = () => {
        store.dispatch(decreaseCounter(2))
    }

    useEffect(() => {
        store.subscribe(() => {setCounter(store.getState().counter)});
    }, []);

    return (
        <div>
            <h2 className='my-2'>Redux Counter</h2>
            <h4>Counter: {counter}</h4>

            <Button onClick={handleCounterIncrease}>Increase</Button>
            <Button onClick={handleCounterDecrease}>Decrease</Button>

        </div>
    );
}

export default Reduxcounter;

import React from 'react';
import Button from './controls/Button';
import store from '../../redux/store/store';
import addEmployee from '../../redux/action/employee';

const Addemployeeredux = () => {

    const handleButtonClick = () => {
        store.dispatch(addEmployee({name: "Demo Employee"}));
        console.log(store.getState());
    }

    return (
        <div>
            <h3>Add Employee</h3>
            <Button onClick={handleButtonClick}>Add</Button>
        </div>
    );
}

export default Addemployeeredux;

import React from 'react';
import Asgn1clientlist from './Asgn1ClientList';
import { Outlet } from 'react-router-dom';

const Assignment1 = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-md-7'>
                    <Asgn1clientlist />
                </div>
                <div className='col-md-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Assignment1;

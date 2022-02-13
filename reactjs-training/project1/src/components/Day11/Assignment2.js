import React from 'react';
import Asgn2clientlist from './Asgn2ClientList';
import { Outlet } from 'react-router-dom';

const Assignment2 = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-md-7'>
                    <Asgn2clientlist />
                </div>
                <div className='col-md-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Assignment2;

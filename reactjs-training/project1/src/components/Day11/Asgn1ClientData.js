import React from 'react';
import { useParams } from 'react-router-dom';

const Asgn1clientdata = () => {
    const params = useParams();
    return (
        <div>
            <div className=''>
                <h5>Id: {params.clientId}</h5>
                <h5>Name: {params.clientName}</h5>
            </div>
        </div>
    );
}

export default Asgn1clientdata;

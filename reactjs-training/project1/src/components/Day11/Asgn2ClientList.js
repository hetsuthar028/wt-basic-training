import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Asgn2clientlist = () => {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4200/clients')
            .then((response) => {
                setClients([...response.data]);
            })
            .catch((err) => {
                console.log("Error fetching clients", err.message);
            })
    }, []);

    return (
        <div>
            <table className='table table-striped'>
                <thead className='table-dark'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Area</th>
                        <th>Select</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client) => (
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.name}</td>
                            <td>{client.phone}</td>
                            <td>{client.area}</td>
                            <td><Link to={`/clients/${client.id}`} ><button className='btn btn-primary'>Select</button></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Asgn2clientlist;

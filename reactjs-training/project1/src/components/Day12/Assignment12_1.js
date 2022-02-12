import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Assignment121 = () => {

    const [clients, setClients] = useState([]);
    const [showDetails, setShowDetails] = useState(-1);

    useEffect(() => {
        axios.get('http://localhost:4200/clients')
            .then((response) => {
                setClients([...response.data]);
            })
            .catch((err) => {
                console.log("Error fetching clients", err.message);
            })
    }, []);

    const handleViewDetails = (id) => {
        if(id == showDetails){
            return setShowDetails(-1);
        }
        setShowDetails(id);
    }

    return (
        <div>
             <table className='table table-striped'>
                <thead className='table-dark'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Area</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client) => (
                        <>
                            <tr key={client.id}>
                                <td>{client.id}</td>
                                <td>{client.name}</td>
                                <td>{client.phone}</td>
                                <td>{client.area}</td>
                                <td><button className='btn btn-primary' onClick={() => handleViewDetails(client.id)}>View</button></td>
                            </tr>
                            {showDetails == client.id && (
                                <tr className='bg-warning'>
                                    <td><b>Project: </b>{client.project}</td>
                                    <td><b>Platform: </b>{client.platform}</td>
                                    <td><b>Bidget: </b>{client.budget}</td>
                                    <td><b>POC: </b>{client.poc}</td>
                                    <td><b>Ending Date: </b>{client.endingDate}</td>
                                </tr>
                            )}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Assignment121;

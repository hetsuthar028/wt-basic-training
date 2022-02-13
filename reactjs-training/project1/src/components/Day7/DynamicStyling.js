import React, { useState } from 'react';

const Dynamicstyling = () => {

    const initialData = [
        {clientId: 101, clientName: 'A1 Pvt. Ltd.', region: 'East', selected: false},
        {clientId: 102, clientName: 'A2 Pvt. Ltd.', region: 'West', selected: false},
        {clientId: 103, clientName: 'A3 Pvt. Ltd.', region: 'North', selected: false},
        {clientId: 104, clientName: 'A4 Pvt. Ltd.', region: 'South', selected: false},
    ];

    const [clients, setClients] = useState(initialData);

    const handleSelect = (idx) => {
        let tempClient = [...clients]
        tempClient[idx].selected = !tempClient[idx].selected
        console.log("Temp client", tempClient)
        setClients(tempClient)
    }

    return (
        <div className='p-3'>
            <table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Region</th>
                        <th>Select</th>
                    </tr>
                    {clients.map((client, idx) => (
                        <tr className={client.selected ? 'bg-success': ''} key={idx}>
                            <td>{client.clientId}</td>
                            <td>{client.clientName}</td>
                            <td>{client.region}</td>
                            <td><button className='btn btn-info' onClick={() => handleSelect(idx)}>Select</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default Dynamicstyling;

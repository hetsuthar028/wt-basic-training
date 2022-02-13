import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const dummyData = [
    { id: 1, name: "A1 Pvt Ltd.", phone: 91827397498, area: "ABC" },
    { id: 2, name: "A2 Pvt Ltd.", phone: 11928301293, area: "QWE" },
    { id: 3, name: "A3 Pvt Ltd.", phone: 93874928734, area: "ABC" },
    { id: 4, name: "A4 Pvt Ltd.", phone: 21639183493, area: "SDF" },
    { id: 5, name: "A5 Pvt Ltd.", phone: 18273746333, area: "RTY" },
];

const Asgn1clientlist = () => {
    const [clients, setClients] = useState(dummyData);

    return (
        <div>
            <table className="table table-striped">
                <thead className="table-dark">
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
                            <td><Link to={`/clients/${client.id}/${client.name}`}><button className="btn btn-primary">Select</button></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Asgn1clientlist;

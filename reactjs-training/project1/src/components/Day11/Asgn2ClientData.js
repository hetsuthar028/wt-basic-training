import axios from "axios";
import React, { useState, useEffect, cloneElement } from "react";
import { useParams } from "react-router-dom";

const Asgn2clientdata = () => {
    const params = useParams();
    const [client, setClient] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:4200/clients/${params.clientId}`)
            .then((response) => {
                setClient(response.data);
            })
            .catch((err) => {
                console.log("Error fetching single client:", err.message);
            })
    }, [params]);

    return (
        <div>
            <div>
                <h5>Id: {client.id}</h5>
                <h5>Name: {client.name}</h5>
                <h5>Phone: {client.phone}</h5>
                <h5>Area: {client.area}</h5>
            </div>
        </div>
    );
};

export default Asgn2clientdata;

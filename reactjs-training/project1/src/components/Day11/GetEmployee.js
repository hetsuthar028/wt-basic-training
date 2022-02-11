import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Getemployee = () => {
    const params = useParams();

    const [employee, setEmployee] = useState({});

    useEffect(() => {
        axios.get("http://localhost:4000/employee/" + params.employeeId)
            .then((response) => {
                setEmployee(response.data);
            })
            .catch((err) => {
                console.log("ERROR!", err.message);
            })
    }, []);

    return (
        <div>
            {employee.id}, {employee.name}, {employee.address}, {employee.city}
        </div>
    );
}

export default Getemployee;

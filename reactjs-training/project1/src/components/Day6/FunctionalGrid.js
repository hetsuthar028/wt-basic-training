import React, { useState, useEffect } from "react";

const Functionalgrid = () => {
    const [employees, setEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    useEffect(() => {
        let dataFromAPI = [
            {
                empId: 101,
                empName: "John Doe",
                salary: 200000,
                department: "Web Development",
            },
            {
                empId: 102,
                empName: "John Doe",
                salary: 700000,
                department: "Software Development",
            },
            {
                empId: 103,
                empName: "John Doe",
                salary: 400000,
                department: "Web Development",
            },
            {
                empId: 104,
                empName: "John Doe",
                salary: 350000,
                department: "Mobile App Development",
            },
            {
                empId: 105,
                empName: "John Doe",
                salary: 900000,
                department: "Software Development",
            },
            {
                empId: 106,
                empName: "John Doe",
                salary: 220000,
                department: "Software Development",
            },
            {
                empId: 107,
                empName: "John Doe",
                salary: 810000,
                department: "Admin",
            },
            {
                empId: 108,
                empName: "John Doe",
                salary: 790000,
                department: "Mobile App Development",
            },
            {
                empId: 109,
                empName: "John Doe",
                salary: 150000,
                department: "HR",
            },
            {
                empId: 110,
                empName: "John Doe",
                salary: 120000,
                department: "Mobile App Development",
            },
            {
                empId: 111,
                empName: "John Doe",
                salary: 720000,
                department: "HR",
            },
        ];

        setEmployees(dataFromAPI);
        setFilteredEmployees(dataFromAPI);
        console.log("useEffect from Functioncal Grid");
    }, []);

    const updateFilteredData = (e) => {
        let {value} = e.target;
        if(value === 'All'){
            return setFilteredEmployees(employees);
        }
        setFilteredEmployees(employees.filter((employee) => employee.department === value));
    }

    const getUniqueDepartments = () => {
        let tempArray = ['All'];

        employees.forEach((empl) => {
            if(!tempArray.includes(empl.department)){
                tempArray.push(empl.department)
            }
        })

        return tempArray.map((ar, idx) => (<option key={idx}>{ar}</option>))
    }

    return (
        <div>
            <h3>Functional Component Grid</h3>
            <div className="row mt-4">
                <div className="col-md-6 m-auto">
                    <h5>Select Department: </h5>
                    <select onChange={updateFilteredData}>
                        {getUniqueDepartments()}
                    </select>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-md-8 m-auto">
                    <table>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Salary</th>
                                <th>Department</th>
                            </tr>
                            {filteredEmployees.map((employee, idx) => (
                                <tr key={idx}>
                                    <td>{employee.empId}</td>
                                    <td>{employee.empName}</td>
                                    <td>{employee.salary}</td>
                                    <td>{employee.department}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Functionalgrid;

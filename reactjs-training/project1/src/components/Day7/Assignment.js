import React, { useState } from "react";

const Assignment = () => {

    const [empId, setEmpId] = useState('');
    const [empName, setEmpName] = useState('');
    const [status, setStatus] = useState('Active');
    const [cssType, setCssType] = useState('Style');
    const [employees, setEmployees] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(empId, empName, status, cssType);
        let newEmployee = {
            empId,
            empName,
            status,
            cssType
        }
        setEmployees([...employees, newEmployee])
    }

    const getProperty = (type) => {
        let a = type === 'Style' ? {style: {backgroundColor: 'red'}} : {className: 'bg-primary text-white'};
        console.log(a)
        return a
    }

    return (
        <div>
            <h3>Assignment</h3>
            <div className="row m-3">
                <div className="col-md-5 m-auto">
                    <div className="card p-2 border-success">
                        <div className="form-group">
                            <form method="POST" onSubmit={handleSubmit}>
                                <label htmlFor="empId">Employee Id:</label>
                                <input
                                    type="number"
                                    className="form-control my-2"
                                    name="empId"
                                    placeholder="Enter employee id"
                                    value={empId}
                                    onChange={(e) => setEmpId(e.target.value)}
                                    required
                                />

                                <label htmlFor="empName">Employee Name:</label>
                                <input
                                    type="text"
                                    className="form-control my-2"
                                    name="empName"
                                    placeholder="Enter employee name"
                                    value={empName}
                                    onChange={(e) => setEmpName(e.target.value)}
                                    required
                                />

                                <label htmlFor="status">Status:</label>
                                <select
                                    className="form-control my-2"
                                    name="status"
                                    value={status}
                                    onChange={(e) => {
                                        setStatus(e.target.value)
                                    }}
                                >
                                    <option>Active</option>
                                    <option>Disabled</option>
                                </select>

                                <label htmlFor="cssType">CSS Type:</label>
                                <select
                                    name="cssType"
                                    className="form-control my-2"
                                    value={cssType}
                                    onChange={(e) => setCssType(e.target.value)}
                                >
                                    <option>Style</option>
                                    <option>Class</option>
                                </select>

                                <button
                                    type="submit"
                                    className="btn btn-primary my-2"
                                >
                                    Add Employee
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 m-auto">
                    <table>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>CSS Type</th>
                            </tr>
                            {employees.map((employee, idx) => (
                                <tr key={idx}>
                                    <td>{employee.empId}</td>
                                    <td>{employee.empName}</td>
                                    <td
                                        {...getProperty(employee.cssType)}
                                    >
                                        {employee.status}
                                    </td>
                                    <td>{employee.cssType}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Assignment;

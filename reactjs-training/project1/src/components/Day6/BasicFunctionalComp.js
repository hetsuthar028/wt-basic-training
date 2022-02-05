import React, { useState } from "react";

const Basicfunctionalcomp = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [employeeName, setEmployeeName] = useState('');

    const handleSubmit = () => {
        console.log(employeeId, employeeName);
    };

    return (
        <div className="row my-2">
            <div className="card col-md-4 m-auto p-3">
                <div className="form-group">
                    <label htmlFor="employeeId">Employee Id:</label>
                    <input
                        className="form-control my-2"
                        type="text"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                    />

                    <label htmlFor="employeeName">Employee Name:</label>
                    <input
                        className="form-control my-2"
                        type="text"
                        value={employeeName}
                        onChange={(e) => setEmployeeName(e.target.value)}
                    />
                    <button className="btn btn-success" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Basicfunctionalcomp;

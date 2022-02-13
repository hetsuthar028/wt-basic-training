import React, { Component } from "react";
import axios from "axios";

class AssignmentUpdated extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            departments: [],
            designations: [],
            selectedDepartment: 0,
            selectedDesignation: 0,
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:4000/departments")
            .then((response) => {
                this.setState({ departments: response.data });
            })
            .catch((err) => {
                console.log("Error fetching departments:", err.message);
            });

        axios
            .get("http://localhost:4000/employee")
            .then((response) => {
                this.setState({ employees: response.data });
            })
            .catch((err) => {
                console.log("Error fetching employees:", err.message);
            });

        axios
            .get("http://localhost:4000/designation")
            .then((response) => {
                this.setState({ designations: response.data });
            })
            .catch((err) => {
                console.log("Error fetching designations:", err.message);
            });
    }

    handleDepartmentChange = (e) => {
        this.setState({ selectedDepartment: e.target.value });
    };

    handleDesignationChange = (e) => {
        this.setState({ selectedDesignation: e.target.value });
    };

    render() {
        let {
            employees,
            departments,
            designations,
            selectedDepartment,
            selectedDesignation,
        } = this.state;

        return (
            <div className="p-2">
                <div className="row">
                    <div className="col-md-3 m-auto my-2">
                        <h5>Designation</h5>
                        <select
                            className="form-select"
                            name="designation"
                            value={selectedDesignation}
                            onChange={this.handleDesignationChange}
                        >
                            <option value={0}>All</option>
                            {designations.map((designation, idx) => (
                                <option
                                    key={designation.id}
                                    value={designation.id}
                                >
                                    {designation.designation}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-3 m-auto my-2">
                        <h5>Department:</h5>
                        <select
                            className="form-select"
                            name="department"
                            onChange={this.handleDepartmentChange}
                            value={selectedDepartment}
                        >
                            <option value={0}>All</option>
                            {departments.map((dept, idx) => (
                                <option key={dept.id} value={dept.id}>
                                    {dept.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <table className="table table-striped my-2">
                    <thead className="table-dark">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, idx) => {
                            return (
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.address}</td>
                                        <td>{employee.city}</td>
                                    </tr>
                                
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AssignmentUpdated;

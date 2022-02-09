import React, { Component } from "react";
import axios from "axios";

class Assignmentd9 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            departments: [],
            designations: [],
            selectedDepartment: 0,
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

        axios.get('http://localhost:4000/designation')
            .then((response) => {
                this.setState({ designations: response.data })
            })
            .catch((err) => {
                console.log("Error fetching designations:", err.message);
            })
    }

    handleDepartmentChange = (e) => {
        this.setState({ selectedDepartment: e.target.value });
    };

    getDepartment = (departmentId) => {
        let data = this.state.departments.filter((dept) => dept.id == departmentId)
        return data[0].name;
    }

    getDesignation = (designationId) => {
        let data = this.state.designations.filter((dsgn) => dsgn.id == designationId)
        return data[0].designation;
    }

    render() {
        let { employees, departments, designations, selectedDepartment } = this.state;

        return employees.length && departments.length && designations.length && (
            <div className="p-2">
                <div className="row">
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
                            <th>Department</th>
                            <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, idx) => {
                            return (
                                (selectedDepartment == employee.departmentId ||
                                    selectedDepartment == 0) && (
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.address}</td>
                                        <td>{employee.city}</td>
                                        <td>{this.getDepartment(employee.departmentId)}</td>
                                        <td>{this.getDesignation(employee.designationId)}</td>
                                    </tr>
                                )
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Assignmentd9;

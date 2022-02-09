import React, { Component } from "react";
import axios from "axios";

class Employee3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            designations: [],
            selectedIndex: 1,
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:4000/employee")
            .then((response) => {
                this.setState({ employees: response.data });
            })
            .catch((err) => {
                console.log("Error fetching employees: ", err.message);
            });

        axios
            .get("http://localhost:4000/designation")
            .then((response) => {
                this.setState({ designations: response.data });
            })
            .catch((err) => {
                console.log("Error fetching designations", err.message);
            });
    }

    getDesignation = (designationId) => {
        let { employees, designations } = this.state;
    };

    handleSelectChange = (e) => {
        let { name, value } = e.target;
        console.log(name, value);
        this.setState({selectedIndex: value})
    };

    render() {
        let { designations, employees, selectedIndex } = this.state;

        return (
            <div className="p-2">
                <div className="row">
                    <div className="col-md-5 m-auto my-2">
                        <h4>Designations</h4>

                        <select
                            name="designations"
                            className="form-select"
                            onChange={this.handleSelectChange}
                            value={selectedIndex}
                        >
                            {designations.map((designation, idx) => (
                                <option key={idx} value={designation.id}>
                                    {designation.designation}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <table className="table table-striped">
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
                            return selectedIndex == employee.designationId && (
                            <tr key={idx}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.address}</td>
                                <td>{employee.city}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Employee3;

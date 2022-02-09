import React, { Component } from "react";
import axios from "axios";
import Employee2 from "./Employee2";

class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:4000/employee")
            .then((response) => {
                this.setState({ employees: response.data });
            })
            .catch((err) => {
                console.log("Error occured in fetching the data:", err.message);
            });
    }

    render() {
        let { employees } = this.state;

        return (
            <div className="p-3">
                <div className="row">
                    <div className="col-md-4 m-auto my-3">
                        <Employee2 />
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
                        {employees.map((employee, idx) => (
                            <tr key={idx}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.address}</td>
                                <td>{employee.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Employees;

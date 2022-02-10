import React, { Component } from "react";
import axios from "axios";

let emptyForm = {
    id: "",
    name: "",
    address: "",
    city: "",
};

class Updateemployee2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            currentEmployee: {
                ...emptyForm,
            },
        };
    }

    getEmployeesData = () => {
        axios
            .get("http://localhost:4000/employee")
            .then((response) => {
                this.setState({ employees: response.data });
            })
            .catch((err) => {
                console.log("Error fetching data from Update2", err.message);
            });
    };

    componentDidMount() {
        this.getEmployeesData();
    }

    handleInputChange = (e) => {
        let { currentEmployee } = this.state;
        let { name, value } = e.target;
        this.setState({
            currentEmployee: { ...currentEmployee, [name]: value },
        });
    };

    handleUpdateSelect = (employee) => {
        this.setState({ currentEmployee: { ...employee } });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        let { currentEmployee } = this.state;
        axios
            .put(
                "http://localhost:4000/employee/" + currentEmployee.id,
                currentEmployee
            )
            .then((response) => {
                this.setState({ currentEmployee: { ...emptyForm } });
                this.getEmployeesData();
            })
            .catch((err) => {
                console.log("Error updating the data in Update2:", err.message);
            });
    };

    render() {
        let { employees, currentEmployee } = this.state;
        return (
            <div>
                <div className="row my-2">
                    <div className="col-md-6 m-auto">
                        <h3>Update Employee | Part 2</h3>
                    </div>
                </div>
                <div className="row px-3 my-2">
                    <div className="col-md-4">
                        <div className="card p-2 border-success">
                            <form
                                className="my-2"
                                method="POST"
                                onSubmit={this.handleFormSubmit}
                            >
                                <div className="form-group my-2">
                                    <label htmlFor="employeeId">
                                        Employee Id:
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Please enter employee id"
                                        className="form-control"
                                        value={currentEmployee.id}
                                        name="id"
                                        onChange={() => false}
                                        required
                                        readOnly={true}
                                    />
                                </div>

                                <div className="form-group my-2">
                                    <label htmlFor="employeeName">
                                        Employee Name:
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Please enter employee name"
                                        className="form-control"
                                        name="name"
                                        onChange={this.handleInputChange}
                                        value={currentEmployee.name}
                                        required
                                    />
                                </div>

                                <div className="form-group my-2">
                                    <label htmlFor="employeeAddress">
                                        Employee Address:
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Please enter employee address"
                                        className="form-control"
                                        name="address"
                                        onChange={this.handleInputChange}
                                        value={currentEmployee.address}
                                        required
                                    />
                                </div>

                                <div className="form-group my-2">
                                    <label htmlFor="employeeCity">
                                        Employee city:
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Please enter employee city"
                                        className="form-control"
                                        name="city"
                                        onChange={this.handleInputChange}
                                        value={currentEmployee.city}
                                        required
                                    />
                                </div>

                                <div className="form-group my-2">
                                    <button
                                        className="btn btn-primary mt-2"
                                        type="submit"
                                    >
                                        Update Employee
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <table className="table table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee, idx) => (
                                    <tr key={idx}>
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.address}</td>
                                        <td>{employee.city}</td>
                                        <td>
                                            <button
                                                className="btn btn-warning"
                                                onClick={() =>
                                                    this.handleUpdateSelect(
                                                        employee
                                                    )
                                                }
                                            >
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Updateemployee2;

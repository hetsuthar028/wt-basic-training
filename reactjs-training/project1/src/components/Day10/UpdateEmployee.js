import React, { Component } from "react";
import axios from "axios";

let emptyForm = {
    id: "",
    name: "",
    address: "",
    city: "",
};

class Updateemployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            selectedEmployee: 0,
            currentEmployeeData: {
                ...emptyForm,
            },
            showMessage: false,
            messageType: "",
            message: "",
        };
    }

    handleInputChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            currentEmployeeData: {
                ...this.state.currentEmployeeData,
                [name]: value,
            },
        });
    };

    componentDidMount() {
        axios
            .get("http://localhost:4000/employee")
            .then((response) => {
                this.setState({ employees: response.data });
            })
            .catch((err) => {
                console.log(
                    "Error fetching data in UpdateEmployee:",
                    err.message
                );
            });
    }

    handleSelectChange = (e) => {
        let { value } = e.target;
        if (value == 0) {
            return this.setState({
                currentEmployeeData: { ...emptyForm },
                selectedEmployee: value,
            });
        } else {
            this.setState({
                currentEmployeeData: this.state.employees[value - 1],
                selectedEmployee: value,
            });
        }
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        let { selectedEmployee, currentEmployeeData } = this.state;
        axios
            .put(
                "http://localhost:4000/employee/" + selectedEmployee,
                currentEmployeeData
            )
            .then((response) => {
                let { status } = response;
                if (status == 200) {
                    this.setState({
                        showMessage: true,
                        messageType: "alert alert-success",
                        message: "Employee updated successfully!",
                    });
                } else {
                    this.setState({
                        showMessage: true,
                        messageType: "alert alert-warning",
                        message: "Oops! Please try again.",
                    });
                }
            })
            .catch((err) => {
                console.log("Error updating the employee:", err.message);
                this.setState({
                    showMessage: true,
                    messageType: "alert alert-danger",
                    message: "Some error occured while updating the employee!",
                });
            })
            .then((value) => {
                this.setState({selectedEmployee: 0, currentEmployeeData: emptyForm})
                setTimeout(() => {
                    this.setState({
                        showMessage: false,
                        messageType: "",
                        message: "",
                    });
                }, 3500);
            });
    };

    render() {
        let {
            employees,
            selectedEmployee,
            currentEmployeeData,
            showMessage,
            messageType,
            message,
        } = this.state;
        return (
            <div>
                <div className="row p-2 my-2">
                    <div className="col-md-4 m-auto">
                        <h4>Update Employee</h4>
                    </div>
                </div>

                <div className="row p-2 my-2">
                    <div className="col-md-4 m-auto">
                        <label htmlFor="empNameDropDown">Employee Name:</label>
                        <select
                            className="form-select my-2"
                            value={selectedEmployee}
                            onChange={this.handleSelectChange}
                        >

                            <option value={0}>Select Employee</option>
                            {employees.map((employee) => (
                                <option key={employee.id} value={employee.id}>
                                    {employee.name}
                                </option>
                            ))}
                            
                        </select>
                    </div>
                </div>

                {showMessage && (
                    <div className="rowmy-2">
                        <div className="col-md-4 m-auto">
                            <div className={messageType}>{message}</div>
                        </div>
                    </div>
                )}

                <div className="row p-2 my-2">
                    <div className="card p-2 col-md-4 m-auto border-success">
                        <form
                            className="my-2"
                            method="POST"
                            onSubmit={this.handleFormSubmit}
                        >
                            <div className="form-group my-2">
                                <label htmlFor="employeeId">Employee Id:</label>
                                <input
                                    type="number"
                                    placeholder="Please enter employee id"
                                    className="form-control"
                                    value={currentEmployeeData.id}
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
                                    value={currentEmployeeData.name}
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
                                    value={currentEmployeeData.address}
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
                                    value={currentEmployeeData.city}
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
            </div>
        );
    }
}

export default Updateemployee;

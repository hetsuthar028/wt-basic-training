import React, { Component } from "react";

class Gridassignment extends Component {
    constructor() {
        super();
        this.state = {
            employees: [
                { empId: 101, empName: "John Doe", salary: 50000 },
                { empId: 102, empName: "John Doe", salary: 65000 },
                { empId: 103, empName: "John Doe", salary: 150000 },
                { empId: 104, empName: "John Doe", salary: 250000 },
            ],

            newEmployee: {
                empId: "",
                empName: "",
                salary: "",
            },

            showMessage: 0,
            showDeleteWarning: false,
            currentSelect: undefined,
        };
    }

    getBackground = (salary) => {
        return salary >= 200000
            ? "bg-danger"
            : salary >= 100000
            ? "bg-success"
            : salary > 50000
            ? "bg-primary"
            : "bg-warning";
    };

    getGrade = (salary) => {
        return salary >= 200000
            ? "A"
            : salary >= 100000
            ? "B"
            : salary > 50000
            ? "C"
            : "D";
    };

    handleInputChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            newEmployee: {
                ...this.state.newEmployee,
                [name]: value,
            },
        });
    };

    validateInputs = () => {
        let { empId, empName, salary } = this.state.newEmployee;
        empId = empId.toString().trim();
        empName = empName.trim();
        salary = salary.toString().trim();
        return new Promise((resolve, reject) => {
            if (empId !== "" && empName !== "" && salary !== "") {
                resolve(true);
            } else {
                reject(false);
            }
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.validateInputs()
            .then((result) => {
                let { newEmployee, employees } = this.state;
                
                let findExistingEmployee = employees.findIndex((employee) => employee.empId === newEmployee.empId)

                if(findExistingEmployee !== -1){
                    employees[findExistingEmployee] = newEmployee;
                } else {
                    employees.push(newEmployee)
                }
                
                newEmployee = {
                    empId: "",
                    empName: "",
                    salary: "",
                };
                this.setState({ employees, newEmployee, showMessage: 2 });
            })
            .catch((err) => {
                this.setState({ showMessage: 1 });
                console.log("Error occured in validation");
            });

        setTimeout(() => {
            this.setState({ showMessage: 0 });
        }, 3000);
    };

    handleDeleteYes = () => {
        let { employees, currentSelect } = this.state;
        employees.splice(currentSelect, 1);
        this.setState({ employees, showDeleteWarning: false });
    };

    handleDeleteNo = () => {
        this.setState({showDeleteWarning: false, currentSelect: undefined});
    };

    handleDeleteRequest = (idx) => {
        this.setState({ showDeleteWarning: true, currentSelect: idx });
    };

    handleUpdate = (idx) => {
        let { empId, empName, salary }= this.state.employees[idx];
        let newEmployee = {
            empId,
            empName,
            salary
        }
        this.setState({newEmployee});
    }

    render() {
        let { employees, newEmployee, showMessage, showDeleteWarning } = this.state;
        return (
            <div>
                <h3>Employees Details</h3>
                <div className="row p-3">
                    <div className="col-md-4 m-auto">
                        {showMessage === 1 && (
                            <div className="alert alert-warning">
                                Please check all the inputs and try again!
                            </div>
                        )}
                        {showMessage === 2 && (
                            <div className="alert alert-success">
                                Employee added Successfully!
                            </div>
                        )}

                        <form
                            className="card p-3"
                            method="POST"
                            onSubmit={(e) => this.handleSubmit(e)}
                        >
                            <label htmlFor="empId">Employee Id</label>
                            <br />
                            <input
                                className="form-control my-2"
                                type="number"
                                id="empId"
                                name="empId"
                                onChange={this.handleInputChange}
                                value={newEmployee.empId}
                                placeholder="Please add employee id"
                                required
                            />

                            <label htmlFor="empName">Employee Name</label>
                            <br />
                            <input
                                className="form-control mt-2"
                                type="text"
                                id="empName"
                                name="empName"
                                onChange={this.handleInputChange}
                                value={newEmployee.empName}
                                placeholder="Please add employee name"
                                required
                            />

                            <label htmlFor="salary">Employee Salary</label>
                            <br />
                            <input
                                className="form-control mt-2"
                                type="number"
                                id="salary"
                                name="salary"
                                onChange={this.handleInputChange}
                                value={newEmployee.salary}
                                placeholder="Please add employee salary"
                                required
                            />

                            <button
                                type="submit"
                                className="btn btn-success mt-4"
                            >
                                Add
                            </button>
                        </form>
                    </div>
                    <div className="col-md-8 m-autos">
                        {showDeleteWarning ? (
                            <div>
                                <h5 className="text-danger">
                                    Are you sure you want to delete this
                                    Employee?
                                </h5>
                                <button
                                    className="btn btn-info m-2"
                                    onClick={() => this.handleDeleteYes()}
                                >
                                    Yes
                                </button>
                                <button
                                    className="btn btn-info m-2"
                                    onClick={() => this.handleDeleteNo()}
                                >
                                    No
                                </button>
                            </div>
                        ) : null}

                        <table>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Salary</th>
                                    <th>Grade</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                                {employees.map((employee, idx) => (
                                    <tr key={idx}>
                                        <td>{employee.empId}</td>
                                        <td>{employee.empName}</td>
                                        <td>{employee.salary}</td>
                                        <td
                                            className={this.getBackground(
                                                employee.salary
                                            )}
                                        >
                                            {this.getGrade(employee.salary)}
                                        </td>
                                        <td>
                                            <button className="btn btn-info" onClick={() => this.handleUpdate(idx)}>
                                                Update
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() =>
                                                    this.handleDeleteRequest(
                                                        idx
                                                    )
                                                }
                                            >
                                                Delete
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

export default Gridassignment;

import axios from "axios";
import React, { Component } from "react";

class Addemployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newEmployee: {
                id: "",
                name: "",
                address: "",
                city: "",
            },
            showMessage: false,
            messageType: '',
            message: '',
        };
    }

    handleInputChange = (e) => {
        let {name, value} = e.target;
        this.setState({newEmployee: {...this.state.newEmployee, [name]: value}});
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.newEmployee);
        axios.post('http://localhost:4000/employee', this.state.newEmployee)
            .then((response) => {
                console.log("Response", response);
                this.setState({showMessage: true, messageType: 'alert alert-success', message: 'Employee Added Successfully!'});
                
                setTimeout(() => {
                    this.setState({showMessage: false});
                }, 3000);
            })
            .catch((err) => {
                console.log("Error uploading new employee!", err.message);
                this.setState({showMessage: true, messageType: 'alert alert-danger', message: err.message});
                
                setTimeout(() => {
                    this.setState({showMessage: false});
                }, 3000);
            });
        
        
    }

    render() {
        let {newEmployee, showMessage, messageType, message} = this.state;
        return (
            <div>
                <div className="row my-2">
                    <div className="card p-2 col-md-4 m-auto border-success">
                        <h5>Add Employee</h5>
                        <form className="my-2" method="POST" onSubmit={this.handleFormSubmit}>
                            <div className="form-group my-2">
                                <label htmlFor="employeeId">
                                    Employee Id:
                                </label>
                                <input
                                    type="number"
                                    placeholder="Please enter employee id"
                                    className="form-control"
                                    value={newEmployee.employeeId}
                                    name="id"
                                    onChange={this.handleInputChange}
                                    required
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
                                    value={newEmployee.employeeName}
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
                                    value={newEmployee.employeeAddress}
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
                                    value={newEmployee.employeeCity}
                                    required
                                />
                            </div>
                            <div className="form-group my-2">
                                <button className="btn btn-primary">Add Employee</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-md-4 m-auto">
                        {showMessage && (
                            <div className={messageType}>
                                {message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Addemployee;

import React, { Component } from 'react';

class Employee extends Component {
    constructor(){
        super();
        this.state = {
            empId: 'T101',
            empName: 'John Doe',
            salary: '$100,000'
        }
    }

    render() {
        return (
            <div>
                <p>Employee Id: {this.state.empId}</p>
                <p>Employee Name: {this.state.empName}</p>
                <p>Employee Salary: {this.state.salary}</p>
            </div>
        );
    }
}

export default Employee;

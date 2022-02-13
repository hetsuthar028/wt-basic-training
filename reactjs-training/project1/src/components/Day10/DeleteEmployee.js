import React, { Component } from 'react';
import axios from 'axios';

class DeleteEmployee extends Component {

    constructor(props){
        super(props);

        this.state = {
            employees: [],
        }
    }

    componentDidMount(){
        axios
            .get("http://localhost:4000/employee")
            .then((response) => {
                this.setState({ employees: response.data });
            })
            .catch((err) => {
                console.log("Error occured in fetching the data:", err.message);
            });
    }

    handleDelete = (employeeId, idx) => {
        axios.delete("http://localhost:4000/employee/" + employeeId)
            .then((response) => {
                console.log("Delete Response", response);
                let { employees } = this.state;
                employees.splice(idx, 1);
                this.setState({employees: [...employees]})
            })
            .catch((err) => {
                console.log("Error deleting the data:", err.message);
            })
    }

    render() {
        let { employees } = this.state;
        return (
            <div className='p-2'>
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, idx) => (
                            <tr key={idx}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.address}</td>
                                <td>{employee.city}</td>
                                <td><button className='btn btn-warning' onClick={() => this.handleDelete(employee.id ,idx)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DeleteEmployee;

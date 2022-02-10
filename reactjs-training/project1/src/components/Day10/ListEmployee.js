import React, { Component } from 'react';
import axios from 'axios';

class Listemployee extends Component {

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

export default Listemployee;

import React, { Component } from 'react';
import axios from 'axios';

class Employee2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            designations: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/designation')
            .then((response) => {
                this.setState({designations: response.data});
            }).catch((err) => {
                console.log("Error occured in fetching designation:", err.message);
            })
    }

    handleSelectChange = (e) => {
        let {name, value} = e.target;
        console.log(name, value)
    }

    render() {
        let { designations } = this.state;

        return (
            <div>
                <h4>Designations</h4>

                <select name='designations' className='form-select' onChange={this.handleSelectChange}>
                    <option value={0}>All</option>
                    {designations.map((designation, idx) => (
                        <option key={idx+1} value={designation.id}>{designation.designation}</option>
                    ))}
                </select>
            </div>
        );
    }
}

export default Employee2;

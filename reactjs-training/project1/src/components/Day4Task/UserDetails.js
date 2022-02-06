import React, { Component } from 'react';

class Userdetails extends Component {
    constructor(props){
        super();
        
    }
    render() {
        return (
            <div>
                <p>Inside UserDetails component</p>
                <p>User Role: {this.props.userRole}</p>
            </div>
        );
    }
}

export default Userdetails;

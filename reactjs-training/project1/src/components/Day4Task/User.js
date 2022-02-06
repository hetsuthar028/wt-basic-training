import React, { Component } from 'react';
import Userdetails from './UserDetails';

class User extends Component {
    render() {
        return (
            <div>
                <Userdetails userRole="Admin"/>
            </div>
        );
    }
}

export default User;

import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.setIsLoggedIn(true);
        
        axios.post('http://localhost:4000/add', {
            "email": email,
            "password": password,
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err.response.data);
        });
    }

    return (
        <div>
            <div className="row m-0">
                <div className="col-md-4 m-auto">
                    <div className="card p-3" style={{margin: '100px 0'}}>
                        <h3>Quiz App - Sign Up</h3>
                        <form method="POST" onSubmit={handleFormSubmit}>
                            <div className="form-group my-3">
                                <label htmlFor="email" className="my-2">
                                    Email Address:
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="password">Password:</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    alue={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="form-group my-3">
                                <label htmlFor="cnfPassword">Confirm Password:</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="cnfPassword"
                                    alue={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>

                            <div className="form-group my-3">
                                <button
                                    className="btn btn-success"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        <p>Already have an account? <Link to='/'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;

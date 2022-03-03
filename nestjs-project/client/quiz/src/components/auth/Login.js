import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();        
        axios.post('http://localhost:4000/user/login', {
            "email": email,
            "password": password
        })
        .then((response) => {
            if(response.data === true){
                props.setCurrentUser(email);
                return navigate('/dashboard');
            } else{
                window.alert("Invalid credentials! Please try again.");
            }
        })
        .catch((err) => {
            console.log("Got error in Login", err.response);
            
        })
    }

    return (
        <div>
            <div className="row m-0">
                <div className="col-md-4 m-auto">
                    <div className="card p-3"  style={{margin: "100px 0"}}>
                        <h3>Quiz App - Login</h3>
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
                                <button
                                    className="btn btn-success"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [allUsers, setAllUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        props.setIsAdmin(false);
        props.setCurrentUser("");

        axios
            .get("http://localhost:4300/user")
            .then((response) => {
                setAllUsers([...response.data]);
            })
            .catch((err) => {
                console.log("Error fetching the users:", err.message);
            });
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        let existingUser = allUsers.find(
            (user) => user.username == username && user.password == password
        );
        if (existingUser) {
            // Navigate to dashboard route
            props.setCurrentUser(username);
            props.setIsAdmin(existingUser.admin);
            console.log("Verified");
            navigate("/dashboard");
        } else {
            console.log("Not Verified");
        }
    };

    return (
        <div>
            <div className="row" style={{margin: "50px 0"}}>
                <div className="col-md-5 m-auto">
                    <div className="card p-3 border-white bg-dark">
                        <h3 className="text-white">Login</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-group my-3">
                                <label
                                    htmlFor="username"
                                    className="text-white"
                                >
                                    Username:
                                </label>
                                <input
                                    type="text"
                                    className="form-control my-1"
                                    name="username"
                                    id="username"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    placeholder="Please enter username"
                                />
                            </div>

                            <div className="form-group my-3">
                                <label
                                    htmlFor="password"
                                    className="text-white"
                                >
                                    Password:
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="form-control my-1"
                                    placeholder="Please enter username"
                                />
                            </div>

                            <div className="form-group my-3">
                                <button className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

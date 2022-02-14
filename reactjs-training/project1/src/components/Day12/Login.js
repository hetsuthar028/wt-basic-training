import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Day13/controls/Button";
import Input from "../Day13/controls/Input";
import Label from "../Day13/controls/Label";

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
            <div className="row" style={{ margin: "50px 0" }}>
                <div className="col-md-5 m-auto">
                    <div className="card p-3 border-white bg-dark">
                        <h3 className="text-white">Login</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-group my-3">
                                <Label htmlFor="username" label="Username:" />
                                <Input 
                                    placeholder="Please enter username"
                                    value={username}
                                    name="username"
                                    onInputChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div className="form-group my-3">
                                <Label htmlFor="password" label="Password:" />
                                <Input
                                    type="password"
                                    name="password"
                                    value={password}
                                    placeholder="Please enter password"
                                    onInputChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="form-group my-3">
                                <Button>Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

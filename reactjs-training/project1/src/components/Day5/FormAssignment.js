import React, { Component } from "react";

class Formassignment extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            showMessages: false,
            hasErrors: false,
            errors: [],
        };
    }

    validateInputs = () => {
        let {email, password, errors, hasErrors} = this.state;
        
        email = email.trim();
        password = password.trim();
        errors = [];

        if(password.length < 4){
            errors.push('Password must be greater than 3 characters!');
            this.setState({hasErrors: true, errors: errors});
        } else {
            this.setState({hasErrors: false});
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.validateInputs();
        this.setState({showMessages: true});
    };

    handleInputChange = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value});
    }
    render() {
        let { email, password, hasErrors, errors, showMessages } = this.state;
        return (
            <div className="my-5">
                <div className="row">
                    <div className="card col-md-4 m-auto p-3">
                        <h3 className="text-primary my-3">Sign Up</h3>
                        <form method="POST" onSubmit={(e) => this.handleSubmit(e)}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="my-2 p-2 form-control"
                                id="email"
                                name="email"
                                placeholder="Please enter your email"
                                onChange={this.handleInputChange}
                                value={email}
                                required
                            />

                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="my-2 p-2 form-control"
                                id="password"
                                name="password"
                                placeholder="Please enter your password"
                                onChange={this.handleInputChange}
                                value={password}
                                required
                            />
                            <button className="btn btn-success mt-4" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    {hasErrors ? (
                        <div className="col-md-4 my-4 m-auto alert alert-warning">
                            {errors.map((err) => {
                               return <p>{err}</p>
                            })}
                        </div>
                    ): (
                        showMessages && <div className="col-md-4 my-4 m-auto alert alert-success">
                            <h3 className="">Success!</h3>
                            <p>Email: {email}</p>
                            <p>Password Strength: <span>{password.length >=6 ? "Strong": "Intermediate"}</span></p>
                        </div>
                    )}
                    
                </div>
            </div>
        );
    }
}

export default Formassignment;

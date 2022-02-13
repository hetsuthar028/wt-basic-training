import React, { Component } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Test from "../components/Day11/Test";
import Home from "../components/Day11/Home";
import Aboutus from "../components/Day11/AboutUs";
import Contactus from "../components/Day11/ContactUs";
import Services from "../components/Day11/Services";
import Addemployee from "../components/Day10/AddEmployee";
import Updateemployee2 from "../components/Day10/UpdateEmployee2";
import Vendors from "../components/Day10/Vendors";
import Getemployee from "../components/Day11/GetEmployee";

class Routerbasics extends Component {
    render() {
        return (
            <Router>
                <ul
                    style={{ listStyleType: "none", display: "inline-flex" }}
                    className="my-2"
                >
                    <li className="mx-2">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/services">Services</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/contactus">Contact Us</Link>
                    </li>
                </ul>
                
                <br />

                <ul
                    style={{ listStyleType: "none", display: "inline-flex" }}
                    className="my-2"
                >
                    <li className="mx-2">
                        <Link to="/add-employee">Add Employee</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/update-employee">Update Employee</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/vendors">Vendors</Link>
                    </li>
                </ul>

                <Routes>
                    <Route path="/" element={<h3>Initial Route</h3>} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<Aboutus />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contactus" element={<Contactus />} />
                    <Route path="/vendors" element={<Vendors />} />
                    <Route path="/add-employee" element={<Addemployee />} />
                    <Route path="/update-employee" element={<Updateemployee2 />}/>

                    {/* Passing params with the URL */}
                    <Route path="/employee/:employeeId" element={<Getemployee />}/>

                    {/* Invalid Route Handling */}
                    <Route path="*" element={<h3 className="text-warning">Oops! Page not found! ⚠️</h3>} />
                </Routes>
            </Router>
        );
    }
}

export default Routerbasics;

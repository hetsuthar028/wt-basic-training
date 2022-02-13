import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assignment1 from "../components/Day11/Assignment1";
import Home from "../components/Day11/Home";
import Asgn1clientdata from "../components/Day11/Asgn1ClientData";
import Leftnav from "../components/Day11/LeftNav";
import Vendors from "../components/Day10/Vendors";
import Errormessage from "../components/Day11/ErrorMessage";

const Assignment1router = () => {
    return (
        <div>
            <Router>
                <div className="row">
                    <div className="col-md-2">
                        <Leftnav />
                    </div>
                    <div className="col-md-10">
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/clients" element={<Assignment1 />}>
                                <Route
                                    path=":clientId/:clientName/"
                                    element={<Asgn1clientdata />}
                                />
                            </Route>
                            <Route path="/vendors" element={<Vendors />} />
                            <Route path="*" element={<Errormessage />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Assignment1router;

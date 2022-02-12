import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Day11/Home";
import Vendors from "../components/Day10/Vendors";
import Errormessage from "../components/Day11/ErrorMessage";
import Assignment121 from "../components/Day12/Assignment12_1";
import Leftnav from "../components/Day11/LeftNav";

const Routerd12 = () => {
    return (
        <div>
            <Router>
                <div className="row">
                    <div className="col-md-2">
                        <Leftnav />
                    </div>
                    <div className="col-md-10">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/clients" element={<Assignment121 />} />
                            <Route path="/vendors" element={<Vendors />} />
                            <Route path="*" element={<Errormessage />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default Routerd12;

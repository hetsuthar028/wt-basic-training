import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vendors from "../components/Day10/Vendors";
import Errormessage from "../components/Day11/ErrorMessage";
import Assignment121 from "../components/Day12/Assignment12_1";
import Login from "../components/Day12/Login";
import Dashboard from "../components/Day12/Dashboard";
import Navbar from "../components/Day12/NavBar";
import Updateemployee2 from "../components/Day10/UpdateEmployee2";

const Routerd12 = () => {
    const [currentUser, setCurrentUser] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <div>
            <Router>
                <div className="mt-0">
                    <Navbar isAdmin={isAdmin} currentUser={currentUser} />
                </div>
                <div className="row">
                    <div className="col-md-10 m-auto p-3">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Login
                                        setCurrentUser={setCurrentUser}
                                        setIsAdmin={setIsAdmin}
                                    />
                                }
                            />
                            <Route
                                path="/dashboard"
                                element={
                                    <Dashboard
                                        currentUser={currentUser}
                                    />
                                }
                            />
                            <Route
                                path="/clients"
                                element={<Assignment121 />}
                            />
                            <Route path="/vendors" element={<Vendors />} />
                            <Route path="/employee" element={<Updateemployee2 />} />
                            <Route path="/settings" element={<h1>System Settings ⚙️</h1>} />
                            <Route path="*" element={<Errormessage />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Routerd12;

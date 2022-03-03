import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/auth/Login";
import Signup from "../components/auth/SignUp";
import Dashboard from "../components/dashboard/Dashboard";
import Quiz from "../components/quiz/Quiz";

const Approuter = () => {
    const [currentUser, setCurrentUser] = useState("");

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Login setCurrentUser={setCurrentUser} />}
                />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/dashboard"
                    element={<Dashboard currentUser={currentUser} />}
                />
                <Route
                    path="/quiz"
                    element={<Quiz currentUser={currentUser} />}
                />
            </Routes>
        </Router>
    );
};

export default Approuter;

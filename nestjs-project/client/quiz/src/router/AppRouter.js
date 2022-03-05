import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/auth/Login";
import Signup from "../components/auth/SignUp";
import Dashboard from "../components/dashboard/Dashboard";
import Quiz from "../components/quiz/Quiz";
import Quiz2 from "../components/quiz/Quiz2";
import Score from "../components/quiz/Score";

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
                    element={<Quiz2 currentUser={currentUser} />}
                />
                <Route path="/score" element={<Score />} />
            </Routes>
        </Router>
    );
};

export default Approuter;

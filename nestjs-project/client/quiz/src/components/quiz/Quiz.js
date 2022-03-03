import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Quiz = (props) => {
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (props.currentUser === "") {
            return navigate("/");
        }

        axios
            .get(`http://localhost:4000/question/category/${location.state}`)
            .then((response) => {
                setQuestions(response.data);
            })
            .catch((err) => {
                console.log("Got error", err.response.data);
            });
    }, []);

    const evaluateAnswers = () => {
        let score = 0;
        questions.forEach((question) => {
            if (question.answer === selectedAnswers[question._id]) {
                score += question.score;
            }
        });
        setShowScore(true);
        setScore(score);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(selectedAnswers);
        evaluateAnswers();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setSelectedAnswers({
            ...selectedAnswers,
            [name]: value,
        });
    };

    return (
        <div className="row m-0">
            <div className="col-md-12 m-auto p-3 m-2">
                {showScore && <h3>You Scored: {score} / 5</h3>}

                <form onSubmit={handleFormSubmit}>
                    <div className="row m-0 m-auto">
                        {questions?.map((question, idx) => (
                            <div
                                className="card col-md-5 m-auto p-3 my-3"
                                key={question._id}
                            >
                                <h5>
                                    <b>{question.questionTitle}</b>
                                </h5>
                                <div className="row m-0 p-1">
                                    {question.questionOptions.map(
                                        (opt, idx2) => (
                                            <div
                                                className="col-md-6 form-check"
                                                key={idx2}
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name={question._id}
                                                    id={opt}
                                                    value={opt}
                                                    required={true}
                                                    onChange={handleInputChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor={opt}
                                                >
                                                    {opt}
                                                </label>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Quiz;

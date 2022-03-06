import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const quizQuestions = 5;

const Quiz2 = (props) => {
    const location = useLocation();

    const [currentQuestionNo, setCurrentQuestionNo] = useState(1);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [userAnswers, setUserAnswers] = useState({});
    const [remainingAttempts, setRemainingAttemps] = useState(undefined);
    const [highlighRem, setHighlightRem] = useState(false);

    const navigate = useNavigate();

    const fetchCurrentQuestion = () => {
        axios
            .get(
                `http://localhost:4000/question/category/${location.state}/${currentQuestionNo}`
            )
            .then((response) => {
                let question = response.data;
                if (question) {
                    setCurrentQuestion(question);
                }
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    const fetchRemainingAttemps = () => {
        axios
            .get(
                `http://localhost:4000/solution/attempts/${location.state}/${props.currentUser}`
            )
            .then((response) => {
                setRemainingAttemps(response.data);
            })
            .catch((err) => {
                console.log("Remaining attempts error:", err.response.data);
            });
    };

    useEffect(() => {
        fetchRemainingAttemps();
        fetchCurrentQuestion();
    }, [currentQuestionNo]);

    const handleSubmit = () => {
        if (quizQuestions - Object.keys(userAnswers).length > 0) {
            setHighlightRem(true);

            setTimeout(() => {
                setHighlightRem(false);
            }, 3000);
        } else {
            axios
                .post(`http://localhost:4000/solution/add`, {
                    userEmail: props.currentUser,
                    userAnswers: userAnswers,
                    category: location.state,
                })
                .then((response) => {
                    return navigate("/score", { state: response.data.score });
                })
                .catch((err) => {
                    console.log("Solution ERR", err.response.data);
                });
        }
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;

        setUserAnswers({
            ...userAnswers,
            [name]: {
                userAnswer: value,
                correct: value === currentQuestion.answer,
                score: currentQuestion.score,
            },
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestionNo < quizQuestions) {
            setCurrentQuestionNo((value) => value + 1);
        }
    };

    const handlePreviosQuestion = () => {
        if (currentQuestionNo > 0) {
            setCurrentQuestionNo((value) => value - 1);
        }
    };

    return (
        Object.keys(currentQuestion).length !== 0 && (
            <div style={{ margin: "50px 0" }}>
                <div className="row m-0 p-2">
                    <div className="col-md-12">
                        <h1>
                            {`${location.state
                                .toString()[0]
                                .toUpperCase()}${location.state
                                .toString()
                                .slice(1)}`}{" "}
                            Quiz
                        </h1>
                    </div>
                    <div>
                        <h5 className="text-danger mt-2">
                            Attempts Remaining: {remainingAttempts}
                        </h5>
                    </div>
                </div>

                {remainingAttempts > 0 ? (
                    <>
                        <div className="row m-0 p-2">
                            <div className="col-md-3 m-auto">
                                <p>Question {currentQuestionNo} of 5</p>
                            </div>
                        </div>
                        <div className="row m-0 p-2">
                            <div className="col-md-5 px-0 m-auto text-start">
                                <p
                                    className={`p-2 ${
                                        highlighRem &&
                                        `text-white bg-danger font-weight-bold`
                                    }`}
                                    style={{ display: "inline" }}
                                >
                                    Questions Left:{" "}
                                    {quizQuestions -
                                        Object.keys(userAnswers).length}
                                </p>
                            </div>
                        </div>
                        <div className="row m-0 p-2">
                            <div className="col-md-5 m-auto p-4 card">
                                <h5 className="text-start">
                                    <b>{currentQuestion.questionTitle}</b>
                                </h5>
                                <div className="row p-2">
                                    {/* {currentQuestion.questionOptions.map((opt) => (<h2>S</h2>))} */}
                                    {currentQuestion?.questionOptions.map(
                                        (opt, indx) => (
                                            <div
                                                className="col-md-6 form-check"
                                                key={opt}
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name={currentQuestion._id}
                                                    id={opt}
                                                    value={opt}
                                                    required={true}
                                                    onChange={handleInputChange}
                                                    checked={
                                                        userAnswers[
                                                            currentQuestion._id
                                                        ]?.userAnswer === opt
                                                    }
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
                        </div>
                        <div className="row m-0 p-2 my-3">
                            {/* <div className='col-md-2'></div> */}
                            <div className="col-md-12 m-auto">
                                <button
                                    className="btn btn-info mx-1"
                                    disabled={currentQuestionNo === 1}
                                    onClick={handlePreviosQuestion}
                                >
                                    Previous
                                </button>
                                <button
                                    className="btn btn-warning mx-1"
                                    disabled={
                                        !(currentQuestionNo < quizQuestions)
                                    }
                                    onClick={handleNextQuestion}
                                >
                                    Next
                                </button>
                                <button
                                    className="btn btn-primary mx-1"
                                    disabled={
                                        !(currentQuestionNo === quizQuestions)
                                    }
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                            {/* <div className='col-md-2'></div> */}
                        </div>
                    </>
                ) : (
                    <h3>Maximum Attempts Reached</h3>
                )}
            </div>
        )
    );
};

export default Quiz2;

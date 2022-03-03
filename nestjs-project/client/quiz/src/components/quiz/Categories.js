import React from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
    const navigate = useNavigate();

    const handeNavigate = (quizCategory) => {
        return navigate("/quiz", { state: quizCategory });
    };

    return (
        <div className="my-3 row">
            <div className="col-md-7 m-auto">
                <button
                    onClick={() => handeNavigate("reactjs")}
                    className="btn btn-success mx-1"
                >
                    React.js
                </button>
                <button
                    onClick={() => handeNavigate("nodejs")}
                    className="btn btn-info mx-1"
                >
                    Node.js
                </button>
                <button
                    onClick={() => handeNavigate("mongodb")}
                    className="btn btn-danger mx-1"
                >
                    MongoDB
                </button>
                <button
                    onClick={() => handeNavigate("expressjs")}
                    className="btn btn-primary mx-1"
                >
                    Express.js
                </button>
                <button
                    onClick={() => handeNavigate("nestjs")}
                    className="btn btn-warning mx-1"
                >
                    Nest.js
                </button>
            </div>
        </div>
    );
};

export default Categories;

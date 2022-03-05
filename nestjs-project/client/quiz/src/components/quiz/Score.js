import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Score = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state === "") {
            return navigate("/dashboard");
        }
    }, []);

    return (
        <div>
            <div style={{ margin: "200px 0" }}>
                <h2 className="text-danger">
                    🎉 You Scored: {location.state ?? 0}
                </h2>
                <button
                    className="btn btn-dark my-2"
                    onClick={() => navigate("/dashboard")}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default Score;

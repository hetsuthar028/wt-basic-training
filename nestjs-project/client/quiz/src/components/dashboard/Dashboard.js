import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../quiz/Categories";

const Dashboard = (props) => {

    const navigate = useNavigate();

    useEffect(() => {
        if(props.currentUser === ''){
            return navigate('/');
        }
    }, []);

    return (
        <div className="p-3">
            <h2>
                Welcome to the <code>QUIZ</code> app.
            </h2>
            <div className="my-5">
                <h5>Select any quiz category to begin!</h5>
            </div>
            <Categories />
        </div>
    );
};

export default Dashboard;

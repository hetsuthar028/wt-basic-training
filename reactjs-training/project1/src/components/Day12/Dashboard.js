import React from "react";

const Dashboard = (props) => {
    return (
        <div className="my-3">
            <h1>Login Successful ✔️</h1>
            <br />
            <h3>Welcome <code>@{props.currentUser}</code> ✌️</h3>
        </div>
    );

};

export default Dashboard;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const [sidebars, setSiderbars] = useState([]);

    useEffect(() => {
        if (props.isAdmin && props.isAdmin == true) {
            axios
                .get("http://localhost:4400/sidebars")
                .then((response) => {
                    setSiderbars([...response.data]);
                })
                .catch((err) => {
                    console.log("Error fetching sidebars:", err.message);
                });
        }
    }, [props.isAdmin, props.currentUser]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Het Suthar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        {props.isAdmin &&
                            sidebars.map((sidebar) => (
                                <li className="nav-item" key={sidebar.id}>
                                    <Link
                                        className="nav-link active"
                                        aria-current="page"
                                        to={sidebar.url}
                                    >
                                        {sidebar.menuName}
                                    </Link>
                                </li>
                            ))}
                        {props.currentUser && (
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">
                                    Logout
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

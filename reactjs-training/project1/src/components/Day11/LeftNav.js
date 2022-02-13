import './LeftNav.css';
import React from "react";
import { Link } from 'react-router-dom'

const Leftnav = () => {
    return (
        <div>
            <h5>Navigations</h5>
            <div className="text-start">
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/clients">Clients</Link></li>
                    <li><Link to="/vendors">Vendors</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Leftnav;

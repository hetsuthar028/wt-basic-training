import React, { version } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Leftnav from '../components/Day11/LeftNav';
import Home from '../components/Day11/Home';
import Asgn2clientdata from '../components/Day11/Asgn2ClientData';
import Vendors from '../components/Day10/Vendors';
import Assignment2 from '../components/Day11/Assignment2';

const Assignment2router = () => {
    return (
        <div>
            <Router>
                <div className='row'>
                    <div className='col-md-2'>
                        <Leftnav />
                    </div>
                    <div className='col-md-10'>
                        <Routes>
                            <Route path='/' element={<Home />}/>
                            <Route path='/clients' element={<Assignment2 />}>
                                <Route path=':clientId' element={<Asgn2clientdata />} />
                            </Route>
                            <Route path='/vendors' element={<Vendors />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default Assignment2router;

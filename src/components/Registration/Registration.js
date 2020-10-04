import React from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from './Group 1329.png';
import './Registration.css';

const Registration = () => {
    let {name} = useParams();
    console.log(name);
    return (
        <div className="container log-in">
            <div className="logo-style">
                <img src={logo} alt=""/>
            </div>
            <div className="registration-form">
                <div className="registration-form-article">
                    <h4>Registration as a Volunteer</h4>
                    <br/>
                    <br/>
                    <input type="text" className="input-type" name="name" placeholder="Full Name" id=""/>
                    <br/>
                    <br/>
                    <input type="email" className="input-type" name="email" placeholder="Email" id=""/>
                    <br/>
                    <br/>
                    <input type="date" className="input-type" name="Date" placeholder="Date" id=""/>
                    <br/>
                    <br/>
                    <input type="text" className="input-type" name="itemName" value={`${name}`} id=""/>
                    <br/>
                    <br/>
                    <Link to="/events" id="event"><button className="googleInput">Registration</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Registration;
import {Link} from "react-router-dom";
import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
import logo from './Group 1329.png';

const Navigation = () => {
    return (
        <div className="container">
            <Navbar bg="light" variant="light" className="background">
                <Navbar.Brand className="brand-logo">
                    <Link to="/home">
                        <img src={logo} alt=""/>
                    </Link>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Link to="/home"><span className="nav-item"><button className="btn-color">Home</button></span></Link>
                    <Link to="/donation"><span className="nav-item"><button className="btn-color">Donation</button></span></Link>
                    <Link to="/events"><span className="nav-item"><button className="btn-color">Events</button></span></Link>
                    <Link to="/blogs"><span className="nav-item"><button className="btn-color">Blogs</button></span></Link>
                </Nav>
                
                <Link to="/registration"><Button className="nav-item button" variant="outline-primary">Registration</Button></Link>
                <Link to="/admin"><Button className="nav-item button" variant="outline-dark">Admin</Button></Link>
                
            </Navbar>
        </div>
    );
};

export default Navigation;
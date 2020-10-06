import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Volunteers from '../Volunteers/Volunteers';
import logo from './Group 1329.png';
import userLogo from './users-alt 1.png';
import plusLogo from './plus 1.png';
import './VolunteerList.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const VolunteerList = () => {
    const [volunteer, setVolunteer] = useState([]);

    useEffect(() => {
        fetch('https://gentle-river-59668.herokuapp.com/volunteerList')
        .then(res => res.json())
        .then(data => setVolunteer(data))
    },[])

    return (
        <div>
            <div className="heading-part d-flex">
                <img id="logo-icon" src={logo} alt=""/>
                <h3>Total Registered Volunteer : {volunteer.length}</h3>
            </div>

            <Row className="volunteer-side">
                <Col sm={3}>
                    <div className="volunteer-left-part">
                        <div className="d-flex register-one">
                            <img id="logo-user" src={userLogo} alt=""/>
                            <h6>Volunteer Register list</h6>
                        </div>
                        <div className="d-flex register-two">
                            <Link to="/AddEvent" className="d-flex register-one">
                                <Button variant="primary" id="event-btn">
                                    <img id="logo-plus" src={plusLogo} alt=""/>
                                    Add Event
                                </Button>
                            </Link>
                            
                        </div>
                    </div>
                </Col>

                <Col sm={9} className="volunteer-list-part">
                    
                    <div className="cart row ">
                        <div className="tag-line d-flex">
                            <Row>
                                <Col sm={3} >
                                    <div className="volunteer-detail">
                                        <h6>Name</h6>
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div className="volunteer-detail">
                                        <h6>Email ID</h6>
                                    </div>
                                </Col>
                                <Col sm={2}>
                                    <div className="volunteer-detail">
                                        <h6 id="resister">Registry date</h6>
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div id="volunteer" className="volunteer-detail">
                                        <h6>Volunteer list</h6>
                                    </div>
                                </Col>
                                <Col sm={1}>
                                    <div className="volunteer-detail">
                                        <h6>Action</h6>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                        <div className="row d-flex">
                            {
                                volunteer.map((volunteer) => <Volunteers key={volunteer._id} usr={volunteer}></Volunteers>)
                            }
                        </div>
                    </div>
                </Col>
            </Row>
            
        </div>
    );
};

export default VolunteerList;
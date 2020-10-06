import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import logo from './Group 1329.png';
import userLogo from './users-alt 1.png';
import plusLogo from './plus 1.png';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './AddEvent.css';
import { useForm } from 'react-hook-form';


const AddEvent = () => {
    const {  handleSubmit } = useForm();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    const onSubmit = (data) => {
        const newEvent = {data};
        fetch('https://gentle-river-59668.herokuapp.com/addNewEvent', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
        
    }
    return (
        <div>
            <div className="heading-part d-flex">
                <img id="logo-icon" src={logo} alt=""/>
                <h3>Add Event</h3>
            </div>

            <Row className="volunteer-side">
                <Col sm={3}>
                    <div className="volunteer-left-part">
                        <Link to="/VolunteerList" className="d-flex register-one">
                            <img id="logo-user" src={userLogo} alt=""/>
                            <h6>Volunteer Register list</h6>
                        </Link>
                        <div className="d-flex register-two">
                            <Button variant="primary" id="event-btn">
                                <img id="logo-plus" src={plusLogo} alt=""/>
                                Add Event
                            </Button>
                        </div>
                    </div>
                </Col>

                <Col sm={9} className="volunteer-list-part addEvent-body">
                    <Row>
                        <Col sm={12} >
                            <div className="volunteer-detail">
                                <form onSubmit={handleSubmit(onSubmit)}  className="d-flex">
                                    <span className="Event-part-one">
                                        <h6>Event Title</h6>
                                        <input type="text" name="" placeholder="Enter title" id="event-title"/>
                                        <br/>
                                        <br/>
                                        <h6>Description</h6>
                                        <textarea type="text" name="" placeholder="Enter description" id="event-description"/>
                                    </span>
                                    <span className="Event-part-two">
                                        <h6>Event Date</h6>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <Grid>
                                                <KeyboardDatePicker
                                                className="input-type"
                                                disableToolbar
                                                variant="inline"
                                                format="dd/MM/yyyy"
                                                margin="normal"
                                                id="date-picker-inline"
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                                />
                                            </Grid>
                                        </MuiPickersUtilsProvider>
                                        <h6>Banner</h6>
                                        <input type="file" name="" id=""/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        
                                    </span>
                                    <input type="submit" id="submit-btn" value="Submit"/>
                                </form>
                            </div>
                        </Col>
                        
                    </Row>
                </Col>
            </Row>
            
        </div>
    );
};

export default AddEvent;
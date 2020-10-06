import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from './Group 1329.png';
import './Registration.css';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const Registration = () => {
    const {name} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const userName = loggedInUser.name;
    const useEmail = loggedInUser.email;

    const clickOnRegistrationForm = (event) => {
        const newUser = {userName, useEmail, selectedDate, name};
        console.log(newUser);

        //event.preventDefault();

        console.log("Watching", newUser);
        fetch('https://gentle-river-59668.herokuapp.com/addUser', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(newUser),
        })
        .then(res => res.json())
        .then(data => {
            alert("post");
        })
    }

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
                    <form action="">
                        <input type="text" className="input-type" name="name" defaultValue={loggedInUser.name} placeholder="Full Name" id=""/>
                        <br/>
                        <br/>
                        <input type="email" className="input-type" name="email" defaultValue={loggedInUser.email} placeholder="Email" id=""/>
                        
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid  >
                                    <KeyboardDatePicker
                                    className="input-type"
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date"
                                    defaultValue={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                            <br/>
                        <input type="text" className="input-type" name="itemName" defaultValue={`${name}`} id=""/>
                        <br/>
                        <br/>
                        <Link to="/UserActivity"><button onClick={(event) => clickOnRegistrationForm(event)}  className="googleInput">Registration</button></Link>
                    </form>
                    
                </div>
            </div>

            

        </div>
    );
};

export default Registration;
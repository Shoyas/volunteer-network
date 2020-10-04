import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    //console.log(name);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const clickOnRegistrationForm = () => {
        const newUser = {...loggedInUser, ...selectedDate, ...name};
        fetch('http://localhost:5000/addUser', {
            method: 'POST',
            headers: {'Context-Type' : 'application/json'},
            body: JSON.stringify(newUser),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
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
                        <input type="text" className="input-type" name="name" value={loggedInUser.name} placeholder="Full Name" id=""/>
                        <br/>
                        <br/>
                        <input type="email" className="input-type" name="email" value={loggedInUser.email} placeholder="Email" id=""/>
                        
                        {/* <input type="date" className="input-type" name="Date" placeholder="Date" id=""/> */}
                        
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
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                            <br/>
                        <input type="text" className="input-type" name="itemName" value={`${name}`} id=""/>
                        <br/>
                        <br/>
                        <button onClick={clickOnRegistrationForm} className="googleInput">Registration</button>
                    </form>

                    {/* <Link to="/events" id="event">
                        

                    </Link> */}
                </div>
            </div>

        </div>
    );
};

export default Registration;
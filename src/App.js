import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LogIn from './components/LogIn/LogIn';
import Registration from './components/Registration/Registration';
import MainBody from './components/MainBody/MainBody';
import Events from './components/Events/Events';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserActivity from './components/UserActivity/UserActivity';
import VolunteerList from './components/VolunteerList/VolunteerList';
import AddEvent from './components/AddEvent/AddEvent';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <p>Name: {loggedInUser.name}</p>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navigation></Navigation>
              <Header></Header>
              <MainBody></MainBody>
            </Route>

            <Route exact path="/home">
              <Navigation></Navigation>
              <Header></Header>
              <MainBody></MainBody>
            </Route>

            <Route path="/logIn">
              <LogIn></LogIn>
            </Route>

            <PrivateRoute path="/registration/:name">
              <Registration></Registration>
            </PrivateRoute>

            <Route path="/registration">
              <Registration></Registration>
            </Route>

            <Route path="/events">
              <Events></Events>
            </Route>

            <Route path="/UserActivity">
              <UserActivity></UserActivity>
            </Route>

            <Route path="/VolunteerList">
              <VolunteerList></VolunteerList>
            </Route>

            <Route path="/AddEvent">
              <AddEvent></AddEvent>
            </Route>
            
          </Switch>

        </Router>
      </UserContext.Provider>
    

    
  );
}

export default App;

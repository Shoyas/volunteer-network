import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogIn from './components/LogIn/LogIn';
import Registration from './components/Registration/Registration';
import MainBody from './components/MainBody/MainBody';
import Events from './components/Events/Events';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

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
            
            <Route path="/logIn">
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/registration/:name">
              <Registration></Registration>
            </PrivateRoute>
            <Route path="/events">
              <Events></Events>
            </Route>
            
          </Switch>

        </Router>
      </UserContext.Provider>
    

    
  );
}

export default App;

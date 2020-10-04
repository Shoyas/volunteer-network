import React, { useContext } from 'react';
import logo from './Group 1329.png';
import './LogIn.css';
import googleLogo from './google.png';
import {Link, useHistory, useLocation, useParams} from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';



const LogIn = () => {
    //const {name} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/registration"  }};
    //console.log(loggedInUser.name);
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    

    const clickOnGoogleSign = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email};
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

    }

    return (
        <div className="container log-in">
            <div className="logo-style">
                <img src={logo} alt=""/>
            </div>
            <div className="log-in-form">
                <div className="log-in-form-article">
                    <h4>Login With</h4>
                    <br/>
                    <button onClick={clickOnGoogleSign} className="googleInput"><img src={googleLogo} alt=""/><span id="google-btn">Continue with Google</span></button>
                    <br/>
                    <br/>
                    <h6>Don't have an account? <Link >Create an account</Link></h6>
                    <br/>
                </div>
            </div>

        </div>
    );
};

export default LogIn;
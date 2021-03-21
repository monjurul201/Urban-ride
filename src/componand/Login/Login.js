import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './login.css'

const Login = () => {

    const [user, setUser] = useState({});
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // firebase.initializeApp(firebaseConfig);
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                setUser(user)
                setLoggedInUser(user)
                history.replace(from)
            })
    }


    //Fb Sign In Method
    const handleFacebookSignIn = () => {

        const fbprovider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbprovider)
            .then((result) => {
                var credential = result.credential;
                var user = result.user;
                var accessToken = credential.accessToken;
                console.log('fb user', user);
                setUser(user)
                setLoggedInUser(user)
                history.replace(from)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }
    return (

        <div className='loginPage'>
            <button className='btn btn-danger' onClick={handleGoogleSignIn}>Google Sign In</button>
            <br />
            <button className='btn btn-danger' onClick={handleFacebookSignIn}>Facebook Sign In</button>
        </div>
    );
};

export default Login;
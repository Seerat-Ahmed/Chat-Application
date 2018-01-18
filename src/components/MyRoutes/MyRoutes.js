import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import App from '../App/App';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import About from '../About.js/About';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm.js/SignUpForm';

class MyRoutes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route exact path="/" component={ App } />
                    <Route exact path="/home" component={ Home } />
                    <Route exact path="/about" component={ About } />
                    <Route exact path="/signin" component={ SignInForm } />
                    <Route exact path="/signup" component={ SignUpForm } />
                </div>
            </Router>
        )
    }
}

export default MyRoutes;
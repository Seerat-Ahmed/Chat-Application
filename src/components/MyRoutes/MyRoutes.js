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
import Footer from '../Footer/Footer';
import Contact from '../contact/Contact';
import FireLoader from '../Loader/FireLoader';
import { connect } from 'react-redux';
import loading from '../../store/actions/loading-action';
import { firebase } from '@firebase/app';

class MyRoutes extends Component {

    constructor(props) {
        super(props);

        this.checkAuthState = this.checkAuthState.bind(this);

        this.state = { loading: true }
    }

    componentWillMount() {
        this.checkAuthState();
    }

    checkAuthState() {

        /* ********** Checking for authentication state ********** */        
        firebase.auth().onAuthStateChanged((user) => {
            let currentUser = null
            let isLoggedIn = false;

            if (user) {
                currentUser = user;
                isLoggedIn = true;
            }

        /* ********** removing loader ********** */            
            this.setState({ loading: false })

        /* ********** Dispatching Loading action ********** */
            this.props.loading(currentUser, isLoggedIn);

        });
    }

    render() {
        return (
            <Router>
                {
                    /* ********** if logged in ********** */
                    (this.state.loading) ?
                        <div>
                            <FireLoader />
                        </div>
                    /* ********** if not logged in ********** */                        
                        : <div>
                            <NavBar />
                            <Route exact path="/" component={App} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/signin" component={SignInForm} />
                            <Route exact path="/signup" component={SignUpForm} />
                            <Route exact path="/contact" component={Contact} />
                            <Footer />
                        </div>
                }
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}


const mapDispatchToProps = (dispatch) => {
    return {
        loading: (user, loginState) => dispatch(loading(user, loginState))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRoutes);



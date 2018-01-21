import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
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
import { firebase } from '@firebase/app';
import Chat from '../Chat/Chat';
import { _startLoader, _stopLoader } from '../../store/actions/main-loader-action';
import { _setUserInfo, _removeUser } from '../../store/actions/set-user-info-action';
import history from '../../history';
import PorfileCard from '../Profile/ProfileCard';

class MyRoutes extends Component {

    constructor(props) {
        super(props);
        this.checkAuthState = this.checkAuthState.bind(this);
    }

    componentWillMount() {
        this.checkAuthState();
    }

    checkAuthState() {
        const that = this;
        /* ********** Checking for authentication state ********** */
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log('******************** You are logged in ******************** ');
                that.props.stopLoading();
                that.props.setUserInfo(user);
                history.push('/');
            }
            else {
                console.log('******************** You are logged out ******************** ');
                that.props.stopLoading();
                that.props.clearUserInfo();
                history.push('/');
            }
        });
    }

    render() {
        return (
            <Router>
                {
                    /* ********** if logged in ********** */
                    (this.props.isLoading) ?
                        <div>
                            <FireLoader />
                        </div>
                        :
                        <div>
                            <NavBar />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/" component={App} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/signin" component={SignInForm} />
                            <Route exact path="/signup" component={SignUpForm} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/chat:id" component={Chat} />
                            <Route exact path="/profile" component={PorfileCard}/>
                            <Footer />
                        </div>
                }
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        startLoading: () => dispatch(_startLoader()),
        stopLoading: () => dispatch(_stopLoader()),
        setUserInfo: (user) => dispatch(_setUserInfo(user)),
        clearUserInfo: () => dispatch(_removeUser()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRoutes);



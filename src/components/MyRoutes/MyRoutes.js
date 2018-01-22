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
import { _setToLogin, _setToLogout } from '../../store/actions/auth-state-action';
import NotFound404 from '../NotFound404/NotFound404';
import { _getAllUsers } from '../../store/actions/all-user-action';

class MyRoutes extends Component {

    constructor(props) {
        super(props);
        this.checkAuthState = this.checkAuthState.bind(this);
        this.getAllUser = this.getAllUser.bind(this);
    }

    componentWillMount() {
        this.checkAuthState();
        this.getAllUser();
    }

    checkAuthState() {
        const that = this;
        /* ********** Checking for authentication state ********** */
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                that.props.stopLoading();//dispatching action
                that.props.setUserInfo(user);//dispatching action
                that.props.setToLogin();//dispatching action
                history.push('/');
            }
            else {
                that.props.stopLoading();//dispatching action
                that.props.clearUserInfo();//dispatching action
                that.props.setToLogout();//dispatching action
                history.push('/');
            }
        });
    }


    getAllUser() {
        firebase.database().ref('/users').on('child_added', (snapshot) => {
            this.props.getAllUser(snapshot.val(), snapshot.key);//dispatching action
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
                            <Route exact path="/about" component={About} />
                            <Route exact path="/contact" component={Contact} />
                            {
                                /* If user is logged in */
                                (this.props.isLoggedIn) ?
                                    <div>
                                        <Route exact path="/" component={App} />
                                        <Route exact path="/profile" component={PorfileCard} />
                                        <Route exact path="/chat" component={Chat} />
                                    </div>
                                    /* If user is logged out */
                                    :
                                    <div>
                                        <Route exact path="/signin" component={SignInForm} />
                                        <Route exact path="/signup" component={SignUpForm} />
                                    </div>
                            }
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
        isLoggedIn: state.isLoggedIn,
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        startLoading: () => dispatch(_startLoader()),
        stopLoading: () => dispatch(_stopLoader()),
        setUserInfo: (user) => dispatch(_setUserInfo(user)),
        clearUserInfo: () => dispatch(_removeUser()),
        setToLogin: () => dispatch(_setToLogin()),
        setToLogout: () => dispatch(_setToLogout()),
        getAllUser: (user, uid) => dispatch(_getAllUsers(user, uid)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRoutes);



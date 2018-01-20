import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '@firebase/app';
import { connect } from 'react-redux';


class LoginTab extends Component {
    constructor(props) {
        super(props);

        this.loggout = this.loggout.bind(this);
        this.checkForLogIn = this.checkForLogIn.bind(this);

        this.state = { isLoggedIn: false };
    }

    componentWillMount() {
        this.checkForLogIn();
    }

    checkForLogIn() {
        let that = this;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                that.setState({ isLoggedIn: true });
            }
            else {
                that.setState({ isLoggedIn: false });
            }
          });
    }

    loggout() {
        firebase.auth().signOut();
    }

    render() {
        
        return (
            /* ********** if logged in ********** */
            (this.state.isLoggedIn)?
            (
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/profile">Hello { this.props.name }</Link></li>
                    <li><Link onClick={ this.loggout } to="/signin">Log off</Link></li>
            </ul>
            )
            /* ********** if not logged in ********** */
            :(
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/signin">Sign In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
            </ul>
            )
        );
    }
}

const mapStateToProps = (state) => {
    let user = state.loadUser.user;
    let uid = null;
    let name = null;
    console.log(state);

    /* ********** if there is a user ********** */
    if(state.loadUser.user){
        name = user.displayName;
        uid = user.uid;
    }
    console.log(state.loadUser);
    return {
        name: name,
        uid: uid,
        isLoggedIn: state.loadUser.isLoggedIn,
    }
}

export default connect(mapStateToProps, null)(LoginTab);
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '@firebase/app';
import './sign-up.css';
import connect from 'react-redux/lib/connect/connect';
import { _setUserInfo } from '../../store/actions/set-user-info-action';

class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '', email: '', password: '', confirmPassword: '', buttonState: 'disabled' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateCredentials = this.validateCredentials.bind(this);
    }

    handleChange(event) {
        const element = event.target;

        switch (element.name) {
            case 'username':
                this.setState({ username: element.value })
                break;
            case 'email':
                this.setState({ email: element.value });
                break;
            case 'password':
                this.setState({ password: element.value });
                break;
            case 'confirm-password':
                this.setState({ confirmPassword: element.value })
                break;
            default:
                break;
        }

        this.validateCredentials();
    }

    validateCredentials() {
        if (this.state.username !== '' && this.state.email !== '' && this.state.password !== '' && this.state.confirmPassword !== '') {
            if (this.state.password === this.state.confirmPassword)
                this.setState({ buttonState: '' });
        }
        else {
            this.setState({ buttonState: 'disabled' });
        }
    }

    handleSubmit() {

        const email = this.state.email;
        const password = this.state.password;
        const name = this.state.username;
        const that = this;
        let loginUser = {};
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                loginUser = user;
                return user.updateProfile({
                    displayName: name,
                })
                    .then(() => {
                        that.props.setUserInfo(loginUser);
                        that.props.history.push('/');   
                    })
                    .catch((error) => console.log('Failed to update user: ', error) );
            })
            .catch((error) => console.log('Failed to Logged In', error));

        this.setState({ username: '', email: '', password: '', confirmPassword: '' });
    }

    render() {
        return (
            <div className="sign-in section">

                <div>
                    <h3 className="heading-section">Sign Up - My React Application</h3>
                </div>

                <div className="h-line"></div>

                <div className="row">

                    <div className="col-md-1"></div>

                    <div className="col-md-6">

                        <div className="form-group">
                            <label htmlFor="username" className="my-label-wrapper">
                                <h4 className="my-label">Username: </h4>
                            </label>
                            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} id="username" placeholder="Username" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="my-label-wrapper">
                                <h4 className="my-label">Email: </h4>
                            </label>
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="email" placeholder="Email" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="my-label-wrapper">
                                <h4 className="my-label">Password: </h4>
                            </label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="password" placeholder="Password" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirm-password" className="my-label-wrapper">
                                <h4 className="my-label">Confirm Password: </h4>
                            </label>
                            <input type="password" name="confirm-password" value={this.state.confirmPassword} onChange={this.handleChange} id="confirm-password" placeholder="Confirm Password" className="form-control" />
                        </div>

                        <div className="form-group">
                            <button onClick={this.handleSubmit} className={"btn btn-primary " + this.state.buttonState}>Submit</button>
                        </div>

                        <Link to="/signin" className="link">Already have an account?</Link>

                    </div>

                    <div className="col-md-5 aside-logo-wrapper">
                        <div className="avatar">
                            <img src={require('../../assets/firebase-logo.png')} alt="firebase-logo" className="aside-logo" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state;
}


const mapDispatchToProps = (dispatch) => {
    return {
        setUserInfo: (user) => dispatch(_setUserInfo(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
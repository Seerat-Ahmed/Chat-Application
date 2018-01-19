import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sign-in.css'; 

class SignInForm extends Component {

    constructor(props){
        super(props);
        this.state = {  email: '',  password: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const element = event.target;

        switch(element.name) {
            case 'email':
                this.setState({ email: element.value });
                return;
            case 'password':
            this.setState({ password: element.value });
                return;
            default:
                return;
        }
    }

    handleSubmit() {
        this.setState({ email: '',  password: '' });
        console.log(this.state);
    }

    render(){
        return(
            <div className="sign-in section">

                <div>
                    <h3 className="heading-section">Sign In - My React Application</h3>
                </div>

                <div className="h-line"></div>

                <div className="row">

                    <div className="col-md-1"></div>

                    <div className="col-md-6">

                        <div className="form-group">
                            <label htmlFor="email" className="my-label-wrapper">
                                <h4 className="my-label">Email: </h4>
                            </label>                
                            <input type="email" name="email" value={ this.state.email }  onChange={ this.handleChange } id ="email" placeholder="Email" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="my-label-wrapper">
                                <h4 className="my-label">Password: </h4>
                            </label>                
                            <input type="password" name="password" value={ this.state.password } onChange={ this.handleChange } id="password" placeholder="Password" className="form-control" />
                        </div>

                        <div className="checkbox">
                            <label>
                            <input type="checkbox" name="remember-me" />                            
                                <p className="my-label"> Remember me?</p>
                            </label>    
                        </div>

                        <div className="form-group">
                            <button onClick={ this.handleSubmit } className="btn btn-primary">Submit</button>
                        </div>

                        <Link to="/signup" className="link">Sign up as a new user ?</Link>

                    </div>

                    <div className="col-md-5 aside-logo-wrapper">
                        <div className="avatar">
                            <img src={ require('../../assets/firebase-logo.png') } alt="    firebase-logo" className="aside-logo" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignInForm;
import React, { Component } from 'react';
import './NavBar.css';
import { connect } from 'react-redux';
import counter from '../../store/actions/counter-action';
import decrement from '../../store/actions/decrement-action';

class NavBar extends Component {

  constructor(props) {
    super(props);
    console.log('NavBar has been rendered');
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="www.google.combs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="www.google.com"><img src={require('../../assets/firebase-logo.png')} className="logo" alt="firebase logo" /></a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="www.google.com">Home</a></li>
              <li><a href="www.google.com">About</a></li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li><a href="#">Sign In</a></li>
              <li><a href="#">Sign Up</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps, {
  counter: counter,
  decrement: decrement,
})(NavBar);



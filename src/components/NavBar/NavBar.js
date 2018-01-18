import React, { Component } from 'react';
import './NavBar.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
            <Link className="navbar-brand" to="/"><img src={require('../../assets/firebase-logo.png')} className="logo" alt="firebase logo" /></Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
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



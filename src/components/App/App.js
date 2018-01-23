import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {


  render() {
    return (
      <div className="app section">
        <h3 className="heading-section">Main page</h3>
        <div className="h-line"></div>
        <ul className="row">
          {
            this.props.allUser.map((item, index) => {
              return <li key={index} id={item.uid} className="list-group-item row col-md-7">
                <h4 className="col-md-9">{item.user.name}</h4>
                <button className="btn btn-primary col-md-3">
                  Say Hello
                </button>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    allUser: state.allUser,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

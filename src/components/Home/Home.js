import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    render(){
        return(
            <div className="home section">
                <h2>Home</h2>
                <div className="h-line"></div>
                <h4>{ this.props.match.params.id }</h4>
            </div>
        )
    }
}

export default Home;
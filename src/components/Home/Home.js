import React, { Component } from 'react';
import Counter from '../TestRedux/counter';
import './home.css';

class Home extends Component {
    render(){
        return(
            <div className="home section">
                <h2 className="heading-section">Home</h2>
                <div className="h-line"></div>
                <Counter />
            </div>
        )
    }
}

export default Home;
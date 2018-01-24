import React, { Component } from 'react';
import './home.css';
import { connect } from 'react-redux';

class Home extends Component {

    constructor(props) {
        super(props);
        console.log();
    }

    render() {
        return (
            <div className="home section">
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {

    };
}


const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
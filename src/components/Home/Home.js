import React, { Component } from 'react';
import './home.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);
        console.log();
    }

    render() {
        return (
            <div className="home section">
                <div className="chat-section">
                    <ul className="messages list-group">
                        <li className="list-group-item">
                            <div className="you">
                                <Link to="/home" className="link name"><h4>Seerat</h4></Link>
                                <p>Seerat you recieved a message from Usama.</p>
                            </div>
                        </li>
                        <li className="list-group-item sender">
                            <div>
                                <Link to="/home" className="link name"><h4>Seerat</h4></Link>
                                <p>Seerat you recieved a message from Usama.</p>
                            </div>
                        </li>
                    </ul>
                    
                    <div className="send-message-wrapper">
                        <input type="text" className="form-control message-box" />
                        <button className="btn btn-primary">Send</button>
                    </div>
                </div>

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
import React, { Component } from 'react';
import './about.css';

class About extends Component {
    render() {
        return (
            <div className="about section">
                <div>
                    <h3 className="heading-section">About - My React Application</h3>
                </div>

                <div className="h-line"></div>

                <h4>This is the about page</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quas. Rerum sit quae architecto impedit possimus nihil magni excepturi animi cumque quo officiis, eligendi, non doloremque totam! Eaque, architecto odio.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quas. Rerum sit quae architecto impedit possimus nihil magni excepturi animi cumque quo officiis, eligendi, non doloremque totam! Eaque, architecto odio.
                </p>
            </div>
        )
    }
}

export default About;
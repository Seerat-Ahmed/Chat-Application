import React, { Component } from 'react';


class Chat extends Component {
    constructor(props){
        super(props);
        console.log('chat');
    }
    render() {
        return (
            <div className="section">
                <h3 className="heading-section">Chat</h3>
                <h4>{this.props.match.params.id}</h4>
            </div>
        );
    }
}


export default Chat;
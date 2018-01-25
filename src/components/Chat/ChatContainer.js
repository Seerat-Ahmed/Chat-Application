import React, { Component } from 'react';
import Chat from './Chat';


class ChatContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Chat senderUid={this.props.match.params.id} name={this.props.match.params.name }/>
                </div>
            </div>
        )
    }
}

export default ChatContainer;
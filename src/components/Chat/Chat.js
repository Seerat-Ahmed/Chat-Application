import React, { Component } from 'react';
import { firebase } from '@firebase/app';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { _getChatMessages, _clearChatMessages } from '../../store/actions/chat-msg-action';
import './chat.css';

class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            senderUid: this.props.match.params.id,
            name: this.props.match.params.name,
            message: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }


    handleChange(event) {
        switch (event.target.name) {
            case 'message':
                this.setState({ message: event.target.value });
                return;
            default:
                return;
        }
    }

    onSubmit() {
        if (this.state.message !== '') {
            firebase.database().ref('/users/' + this.props.user.uid + '/chats/' + this.state.senderUid).push({
                me: this.state.message,
            })
                .then(() => {
                    firebase.database().ref('/users/' + this.state.senderUid + '/chats/' + this.props.user.uid).push({
                        sender: this.state.message,
                    })
                        .then((success) => {
                            console.log('Successsfully send message');
                        })
                        .catch((error) => {
                            console.log('Failed to send message', error);
                        });
                });
        }
    }


    componentWillMount() {
        /* Setting chat starting */
        firebase.database().ref('/users/' + this.props.user.uid + '/chats/' + this.state.senderUid).once('value', (snapshot) => {
            if (!snapshot.val()) {
                firebase.database().ref('/users/' + this.props.user.uid + '/chats/' + this.state.senderUid).push({
                    me: 'Hello There',
                })
                    .then(() => {
                        firebase.database().ref('/users/' + this.state.senderUid + '/chats/' + this.props.user.uid).push({
                            sender: 'Hello There',
                        })
                            .then((success) => {
                                console.log('Successsfullt send message');
                            })
                            .catch((error) => {
                                console.log('Failed to send message', error);
                            });
                    });
            }
        })
            .then(() => {
                firebase.database().ref('/users/' + this.props.user.uid + '/chats/' + this.state.senderUid).on('child_added', (snapshot) => {
                    this.props.getMessage(snapshot.val(), snapshot.key);
                });
            });
    }

    componentWillUnmount() {
        this.props.clearMessage();
    }

    componentWillUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {        
        console.log('node', this.node.scrollHeight);
        console.log('messageList', this.messageList.scrollHeight);
        this.node.scrollIntoView({ behavior: "smooth" });
    }

    render() {
        return (
            <div className="chat">
                <div className="section">
                    <h3 className="heading-section">Chat</h3>

                    <div className="chat-section">
                        <ul className="messages list-group" ref={node => this.messageList = node}>
                            {
                                this.props.conversation.map((item, index) => {

                                    return (
                                        <li key={item.key} className={(item.message.me) ? 'list-group-item ' : 'list-group-item  sender'}>
                                            <div>
                                                <Link to="/home" className="link name"><h4>{(item.message.me) ? 'Me' : this.state.name}</h4></Link>
                                                <p className="message">{
                                                    (item.message.me) ?
                                                        item.message.me
                                                        : item.message.sender
                                                }</p>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                            <li className="scroll-to-me"  ref={node => this.node = node}></li>
                        </ul>

                        <div className="send-message-wrapper" >
                            <input type="text" name="message" value={this.state.message} onChange={this.handleChange} className="form-control message-box" />
                            <button onClick={this.onSubmit} className="btn btn-primary">Send</button>
                        </div>
                    </div>



                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        conversation: state.conversation,
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        getMessage: (msg, key) => dispatch(_getChatMessages(msg, key)),
        clearMessage: () => dispatch(_clearChatMessages()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
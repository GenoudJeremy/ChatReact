import MessageItem from './messageItem'
import React from "react";

class MessageList extends React.Component {
    render() {
        if (this.props.messages.length === 0) {
            return <strong>No messages</strong>
        } else {
            const conv = this.props.messages.map((element, key) =>
                <MessageItem key={key} num={key} username={element.username} message={element.message}/>);
            return conv;
        }
    }
}
export default MessageList;


import React from "react";
import Emoji from "react-emoji-render";

class MessageItem extends React.Component {
    render() {
        let align = 'left';
        if (this.props.num % 2 === 0){
            align = 'right'
        }
        if (typeof this.props.message === 'string' && typeof this.props.username === 'string')
        {return <li className={align}><p><Emoji text={this.props.message}/></p><br/><strong><Emoji text={this.props.username}/></strong></li>}
        else {
            return ''
        }
    }
}
export default MessageItem;


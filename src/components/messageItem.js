import React from "react";
import Emoji from "react-emoji-render";

class MessageItem extends React.Component {
    render() {
        let align = 'left';
        if (this.props.num % 2 === 0){
            align = 'right'
        }
        return <li className={align}><p><Emoji text={this.props.message}/></p><br/><strong>{this.props.auteur}</strong></li>
    }
}
export default MessageItem;

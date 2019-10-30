import MessageList from './messageList'
import * as React from "react";
import { connect } from 'react-redux';
import MessageBar from './messageBar'

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
    }
};

class Chat extends React.Component{
    render(){
        return (
            <div>
                <MessageList messages={this.props.messages}/>
                <MessageBar />
            </div>
        )
    }
}
export default connect(mapStateToProps)(Chat);

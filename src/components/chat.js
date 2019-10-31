import * as React from "react";
import { connect } from 'react-redux';
import MessageBar from './messageBar'
import MessageListContainer from "../container/MessageListContainer.js";

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        log: state.log
    }
};

class Chat extends React.Component{

    render(){
        return (
            <div>
                <MessageListContainer />
                <MessageBar log={this.props.log}/>
            </div>
        )
    }
}
export default connect(mapStateToProps)(Chat);

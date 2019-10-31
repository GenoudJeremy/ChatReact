import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import MessageList from '../components/messageList'

class MessageListContainer extends PureComponent {

    render () {
        return <MessageList messages={this.props.messages} />
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages
});

export default connect(mapStateToProps, null)(MessageListContainer)

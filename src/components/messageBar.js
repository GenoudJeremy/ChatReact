import React from "react";
import {connect} from "react-redux";
import {addMessage} from "../actions/actions";
import ws from '../service/webSocket';
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (auteur,message) => dispatch(addMessage(auteur,message)),
    }
};

class MessageBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {username:this.props.log.username, message: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        if (this.state.message.trim() !== '' && this.state.username.trim() !== ''){
            //this.props.addMessage(this.state.auteur, this.state.message);
            const msg = this.state.message;
            ws.send(JSON.stringify(this.props.addMessage(this.state.username, msg)));

            this.setState({message:""})
        }


    }
    handleChange(event){
        if (event.target.name === 'auteur') {
            this.setState({auteur: event.target.value})
        }
        if (event.target.name === 'message') {
            this.setState( {message: event.target.value})
        }
    }
    render(){
        return (
            <form action="send" method="post" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input className="form-control" id="auteur" name="auteur" type="hidden" value={this.props.log.username} onChange={this.handleChange}/>
                    <input autoComplete="off" className="form-control" id="message" name="message" type="text" value={this.state.message} onChange={this.handleChange}/>
                </div>
                <div className="form-group"><input type="submit" id="btn"/></div>
            </form>
        )
    }
};
export default connect(null, mapDispatchToProps)(MessageBar);

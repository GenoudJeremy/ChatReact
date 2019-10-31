import * as React from "react";
import {connect} from "react-redux";
import {Login} from "../actions/log_reducer";

let user = "";
const mapDispatchToProps = (dispatch) => {
    return {
        Login: (username) => dispatch(Login(username)),
    }
};

class LoginPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {username: ''};
        user = this.state.username;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({username:event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.username.trim() !== "") {
            this.props.Login(this.state.username);
            user = this.state.username;
        }
    }
    render() {
        if (user !== ""){
            return (
                <div>Hello {user}</div>
            )
        }else
        {return (
            <form id="login" name="login" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" className="form-control" value={this.state.username} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-dark"/>
                </div>
            </form>
        )}
    }
};
export default connect(null, mapDispatchToProps)(LoginPage)

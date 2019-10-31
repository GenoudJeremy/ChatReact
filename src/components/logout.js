import * as React from "react";
import {connect} from "react-redux";
import {Logout} from "../actions/logout_reducer";

const mapDispatchToProps = (dispatch) => {
    return {
        Logout: (username) => dispatch(Logout(username)),
    }
};
const mapStateToProps = (state) => {
    return {
        log: state.log,
    }
};
class LogoutPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: this.props.log.username
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        this.props.Logout('');
        this.setState({username: ''});
    }
    render(){
        return(
            <button onClick={this.handleSubmit}>Log Out</button>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage);

import * as React from "react";
import {connect} from "react-redux";
import {Logout} from "../actions/logout_reducer";

const mapDispatchToProps = (dispatch) => {
    return {
        Logout: (username) => dispatch(Logout(username)),
    }
};

class LogoutPage extends React.Component{
    constructor(props){
        super(props)
    }
    handleSubmit(event){
        this.props.Logout('');
        this.setState({username: ''});
    }
    render(){
        return(
            <button onClick={this.handleSubmit}>Log Out</button>
        )
    }
}

export default connect(null, mapDispatchToProps)(LogoutPage);

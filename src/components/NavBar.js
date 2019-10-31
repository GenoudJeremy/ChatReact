import React from "react";

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import LoginPage from "./login";
import Chat from "./chat";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        log: state.log,
    }
};

class NavBar extends React.Component{
    render() {
        console.log(this.props.log.length)
        let link_log = LoginPage;
        if (this.props.log.username !== "") {
            link_log = Chat
        }
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/chat">Chat</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route path="/chat" component={link_log}/>
                        <Route path="/login" component={LoginPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default connect(mapStateToProps)(NavBar)


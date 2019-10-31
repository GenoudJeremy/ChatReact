import React from "react";

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import LoginPage from "./login";
import LogoutPage from "./logout";
import Chat from "./chat";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        log: state.log,
    }
};

class NavBar extends React.Component{
    render() {
        let link_log = LoginPage;
        let link_out = "";
        let link_in = <li><Link to="/login">Login</Link></li>;
        console.log(this.props.log.username);
        if (this.props.log.username !== "") {
            link_log = Chat;
            link_out = <li><LogoutPage/></li>;
            link_in = ""

        }
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/chat">Chat</Link>
                        </li>
                        {link_in}
                        {link_out}
                    </ul>
                    <hr/>
                    <Switch>
                        <Route path="/chat" component={link_log}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/logout" component={LogoutPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default connect(mapStateToProps)(NavBar)


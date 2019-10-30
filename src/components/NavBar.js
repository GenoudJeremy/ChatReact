import React from "react";

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import LoginPage from "./login";
import Chat from "./chat";

export default function NavBar() {
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
                <hr />
                <Switch>
                    <Route exact path="/chat">
                        <Chat />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


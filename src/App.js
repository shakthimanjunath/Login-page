import React from "react";
import Login from "./login";
import { Router, Route, Link, IndexRoute } from "react-router";

export class App extends React.Component {
    render() {
        return (
            (
                <Router>
                    <Route path="/" component={App} />
                    {/* add the routes here */}

                    <Route exact path="/src/login" component={Login} />
                </Router>
            ),
            document.getElementById("app")
        );
    }
}

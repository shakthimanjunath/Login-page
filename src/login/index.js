import React from "react";
import "./styles.css";
import "../bootstrap/css/bootstrap.css";
import "../bootstrap/css/bootstrap-theme.css";

export default class Login extends React.Component {
    render() {
        return (
            <div className="container text-center" id="body">
                <div className="userNameParent">
                    <span
                        class="glyphicon glyphicon-user"
                        aria-hidden="true"
                        id="icon-person"
                    />

                    <input
                        placeholder="user"
                        placeholder-style={{ color: "#fff" }}
                        className="userName"
                    />
                </div>
                <div className="passwordParent">
                    <span
                        class="glyphicon glyphicon-lock"
                        id="icon-password"
                        aria-hidden="true"
                    />

                    <input
                        placeholder="password"
                        placeholder-style={{ color: "#fff" }}
                        className="password"
                    />
                </div>

                <div className="forgotPasswordAndCheckbox" style={{}}>
                    <span>
                        <div class="checkboxTwo">
                            <input
                                type="checkbox"
                                value="1"
                                id="checkboxTwoInput"
                                name=""
                            />

                            <label for="checkboxTwoInput" />
                        </div>{" "}
                    </span>
                    <text id="remember-me">{" " + "Remember me"}</text>
                    <span id="forgot-password">
                        <button className="forgotPassword">
                            <text id="forgot-password-text" style={{}}>
                                Forgot Password?
                            </text>
                        </button>
                    </span>
                </div>
                <button className="login">
                    <text id="login-text">Login</text>
                </button>
            </div>
        );
    }
}

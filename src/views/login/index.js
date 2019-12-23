import React, { Component } from "react";
import LoginWrapper from "../../components/login/index";

// Images
import LoginLogo from "../../static/images/login_logo.png";

class Login extends Component {
  render() {
    return (
      <div>
        <LoginWrapper loginLogo={LoginLogo} />
      </div>
    );
  }
}

export default Login;

import React, { Component } from "react";
import "./login.scss";
import "font-awesome/css/font-awesome.min.css";

class LoginWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="justify-content-center row">
            <div className="col col-md-8">
              <div className="card-group">
                <div className="p-4 card">
                  <div className="card-body">
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <form>
                      <div className="mb-3 input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-user"></i>
                          </span>
                        </div>
                        <input
                          type="email"
                          placeholder="Username"
                          required=""
                          className="form-control"
                          autocomplete="off"
                        ></input>
                      </div>

                      <div className="mb-4 input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-lock"></i>
                          </span>
                        </div>
                        <input
                          type="password"
                          placeholder="Password"
                          required=""
                          className="form-control"
                          autocomplete="off"
                        ></input>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <button className="px-4  btn btn-hospital-color">
                            Login
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="text-white bg-hospital-color  py-5 d-md-down-none card">
                  <div className="text-center card-body">
                    <div>
                      <div
                        style={{
                          width: "70%",
                          margin: "15px auto 0px",
                          height: "100px"
                        }}
                      >
                        <img
                          src={this.props.loginLogo}
                          alt="login logo"
                          style={{ width: "171px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginWrapper;

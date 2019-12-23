import React, { lazy, Suspense, Component } from "react";
import { Switch, Route } from "react-router-dom";
import { withCookies } from "react-cookie";
import Loader from "react-loader-spinner";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";

const Login = lazy(() => import("./views/login/index"));

class App extends Component {
  render() {
    return (
      <Switch>
        <Suspense
          fallback={
            <div className="loader-parent">
              <Loader type="ThreeDots" color="#7AC953" height="40" width="40" />{" "}
            </div>
          }
        >
          <Route
            exact
            path="/"
            render={(props) => (
              <Login {...props} cookies={this.props.cookies} />
            )}
          />
        </Suspense>
      </Switch>
    );
  }
}

export default withCookies(App);

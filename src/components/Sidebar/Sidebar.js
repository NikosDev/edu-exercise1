import React, { Component } from "react";
import Signin from "../Signin/Signin";
import Jokes from "../Jokes/Jokes";
import Bitcoin from "../Bitcoin/Bitcoin";
import Home from "../Home/Home";

import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import "./Sidebar.css";

class Sidebar extends Component {

  state = {
    Auth: false
  };

  handleData(data) {
    console.log(data)
    this.setState({ Auth: data });
  }
  
  handleToggle(e) {
    e.preventDefault();
    var element = document.getElementById("wrapper");
    element.classList.toggle("toggled");
  }

  render() {
    return (
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="list-group list-group-flush">
            <Link
              to="/signin"
              className="list-group-item list-group-item-action bg-light"
            >
              {this.state.Auth ? <del>Already Signed in!</del> : 'Sign In'}
            </Link>
            <Link
              to="/jokes"
              className="list-group-item list-group-item-action bg-light"
            >
              Get Jokes
            </Link>
            <Link
              to="/bitcoin"
              className="list-group-item list-group-item-action bg-light"
            >
              Get Bitcoin Price
            </Link>
          </div>
        </div>

        <div id="page-content-wrapper">
          <nav
            className="navbar navbar-expand-lg navbar-light bg-light border-bottom"
            id="centered-navbar"
          >
            <button
              className="btn btn-primary"
              id="menu-toggle"
              onClick={this.handleToggle}
            >
              Toggle Menu
            </button>
          </nav>
          

          <div className="container-fluid">
            <h1 className="mt-4">
            {/* <Signin handlerFromParant={this.handleData.bind(this)}></Signin> */}
             <Switch>
              <Route path="/" component={Home} exact />
                <Route path="/signin" render={() => this.state.Auth? <Redirect to='/' ></Redirect> : <Signin handlerFromParant={this.handleData.bind(this)}></Signin> } exact />
                <Route path="/jokes" component={Jokes} exact />
                <Route path="/bitcoin" component={Bitcoin} exact />
              </Switch>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;

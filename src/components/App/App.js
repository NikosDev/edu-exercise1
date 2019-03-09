import React, { Component } from "react";
import "./App.css";
import Signin from "../Signin/Signin"
import Sidebar from "../Sidebar/Sidebar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Sidebar />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

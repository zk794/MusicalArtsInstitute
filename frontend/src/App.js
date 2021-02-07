import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./adminPage";
import Student from "./studentPage";
import Parent from "./parentPage";
import Staff from "./staffPage";
class App extends Component {
  render() {
    return (
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/student" component={Student} />
          <Route exact path="/parent" component={Parent} />
          <Route exact path="/staff" component={Staff} />
          <Route exact strict path="/" component={Landing} />
        </Switch>
        {/* <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} /> */}
      </Router>
    );
  }
}

export default App;

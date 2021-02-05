import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Landing />
        </div>
      </Router>
    );
  }
}

export default App;

import React from "react";
import  DefaultLayoutContainer  from "./container/defaultLayoutContainer";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

function App() {
  console.log('x')
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" name="Home" component={DefaultLayoutContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

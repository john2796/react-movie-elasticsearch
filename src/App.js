import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import "./App.css";

import Home from "./components/home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

class App extends Component {
  render() {
    return (
      <>
        <div>
          {/* 
          This  Navlink is like a anchor tag the to is where they're gonna go 
          it has to match the route path !
           */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </>
    );
  }
}

export default App;

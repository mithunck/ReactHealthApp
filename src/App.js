import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Details from "./Details";
class App extends Component {
  render() {
    return (
      <HashRouter>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Profile" component={Profile}/>
            <Route path="/Details" component={Details}/>
          </div>
        </HashRouter>
    );
  }
}
 
export default App;

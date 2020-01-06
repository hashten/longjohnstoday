import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import User from './User';
import Home from './Home';
import Contact from './Contact';

class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>{this.props.AppName}</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/user">User</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;

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
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/user">User</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <Route exact path="/" render={() => <Home AppName={this.props.AppName} />} />
          <Route path="/user" component={User} />
          <Route path="/contact" component={Contact} />
        </div>
      </HashRouter>
    );
  }
}

export default Main;

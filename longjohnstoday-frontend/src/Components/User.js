import React from 'react';
import agent from '../agent';

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      currentuser: null
    };
  }
  componentDidMount() {
    agent.User.current()
      .then(result => {
        this.setState({
          currentuser: result.user
        });
      });
  }

  render() {
    return (
      <h1>
        Hej hej {this.state.currentuser}!
      </h1>
    );
  }
};

export default User;
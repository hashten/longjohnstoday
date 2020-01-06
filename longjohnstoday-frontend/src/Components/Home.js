import React, { Component } from "react";
import agent from "../agent";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      weather: null
    };
  }
  componentDidMount() {
    agent.Weather.current()
      .then(result => {
        this.setState({
          weather: JSON.stringify(result)
        });
      });
  }
  render() {
    return (
      <div class="row">
        <div class="column"><h1>SHOULD I WEAR {this.props.AppName.toUpperCase()}</h1></div>
        <div class="column">
          <div class="content">
            <h2>Current weather</h2>
            <p>{this.state.weather}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

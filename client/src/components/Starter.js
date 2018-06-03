import React, { Component } from "react";

export default class Starter extends Component {
  randomStarter = () => {
    this.props.newStarter();
  };
  render() {
    return (
      <div>
        <p className="starter">{this.props.starter}</p>
        <button className="btn" onClick={this.randomStarter}>
          Get Random starter
        </button>
      </div>
    );
  }
}

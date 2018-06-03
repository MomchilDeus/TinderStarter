import React, { Component } from "react";
import Starter from "./components/Starter";
import Footer from "./components/Footer";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { starter: "Are you ready for the best starter ever?" };
  }

  getNewStarter = () => {
    axios
      .get("/getStarter")
      .then(response => {
        this.setState({ starter: response.data.starter });
      })
      .catch(err => console.log("Error: ", err));
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <span className="logo" />
          <h1 className="heading">Tinder Starter</h1>
          <p className="desc">Tinder starters for non-creeps</p>
          <Starter
            starter={this.state.starter}
            newStarter={this.getNewStarter}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

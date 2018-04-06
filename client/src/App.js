import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="NYTimes-banner.jpg" className="App-logo" alt="NYT" />
          <h2>NYT News Scrape</h2>
        </div>
        <p className="App-intro">
          An app using mongoDB, expressJS, reactJS and nodeJS to bring you content
          from the New York Times...
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/searchbox/searchbox";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="NYTimes-banner.jpg" className="App-logo" alt="NYT" />
          <h2>News Search App</h2>
          <p className="App-intro">
          Using mongoDB, expressJS, reactJS and nodeJS to bring you content
          from the New York Times...
        </p>
        </div>
        <SearchBox />  
      </div>
    );
  }
}

export default App;

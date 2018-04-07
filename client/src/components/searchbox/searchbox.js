import React, { Component } from "react";

class SearchBox extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    searchterm: "",
    articles: "",
    startdate: "",
    enddate: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Search Term: ${this.state.searchterm}Records: ${this.state.records}\nStart Date: ${this.state.startdate}\nEnd Date: ${this.state.enddate}`);
    this.setState({ searchterm: "", articles: "", startdate: "", enddate: "" });
  };

  render() {
    return (
      <div className="container-fluid d-flex justify-content-between m-1">
      <form className="form-inline">
      <div className="form-group m-1">
        <label>Search Term: {this.state.searchterm}</label>
        <input
          type="text"
          placeholder="Enter a Search Term"
          name="searchterm"
          value={this.state.searchterm}
          // onChange={this.handleInputChange}
        />
        </div>
        <div className="form-group m-1">
        <label>Articles: {this.state.records}</label>
        <input
          type="number"
          placeholder="How many articles?"
          name="records"
          value={this.state.articles}
          // onChange={this.handleInputChange}
        />
        </div>
        <div className="form-group m-1">
        <label>Start Date (optional): {this.state.startdate}</label>
        <input
          type="date"
          placeholder="Enter a year"
          name="startyear"
          value={this.state.startdate}
          // onChange={this.handleInputChange}
        />
        </div>
        <div className="form-group m-1">
        <label>End Date (optional): {this.state.enddate}</label>
        <input
          type="date"
          placeholder="Enter a year"
          name="endyear"
          value={this.state.enddate}
          // onChange={this.handleInputChange}
        />
        </div>       
        <button onClick={this.handleFormSubmit}>Submit</button>
      </ form>
      </ div>
    );
  }
}

export default SearchBox;



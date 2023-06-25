import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./searchBox";
// import { robots } from "./robots";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {});
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) =>
      robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    );
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {this.state.robots.length === 0 ? (
          <h1 className="mt5 tc">Loading Bots...</h1>
        ) : (
          <CardList robots={filteredRobots} />
        )}
      </div>
    );
  }
}

export default App;

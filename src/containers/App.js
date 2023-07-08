import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/searchBox";
// import { robots } from "./robots";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

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
      .then((users) => {
        this.setState({ robots: users });
      });
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
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        )}
      </div>
    );
  }
}

export default App;

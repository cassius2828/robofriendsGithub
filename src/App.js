import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./searchBox";
import { robots } from "./robots";
import './App.css';
// const state = {
//     robots: robots,
//     searchfield: ''
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange = (e) => {
    this.setState({searchfield: e.target.value});
  };

  render() {
     const filteredRobots = this.state.robots.filter(robots => 
       robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
     );
    return (
      <div className="tc">
        <h1 className="f1" >RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;

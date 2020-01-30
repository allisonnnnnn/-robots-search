import React, { Component } from "react";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import CardList from "./CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ""
    };
  }

  onSearchChange = e => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobots);
    return (
      <>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </>
    );
  }
}
export default App;

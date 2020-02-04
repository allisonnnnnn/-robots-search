import React, { Component } from "react";
import { connect } from "react-redux";

import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import { setSearchField } from "../actions";

// searchField --> initial state will be replaced by (reducer fn name)searchRobots.searchField in reducers.js
// ？？？searchField is inital state,  state.searchRobots.searchField where does the state come from? (return state from reducer?)
const mapStateToProps = state => {
  return { searchField: state.searchField };
};

// onSearchChange will be reset by mapDispatchToProps
// setSearchField is the action that be dispatched
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};
// event comes from the return of reducer (searchRobots)

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ robots: data }));
  }

  // onSearchChange = event => {
  //   this.setState({ searchfield: event.target.value });
  // };

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </>
      );
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

// connect --> higher order fn, which returns another fn.
// App is the component which need state.

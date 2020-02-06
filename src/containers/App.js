import React, { Component } from "react";
import { connect } from "react-redux";

import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import { setSearchField, requestRobots } from "../actions";

// searchField --> initial state will be replaced by (reducer fn name)searchRobots.searchField in reducers.js
const mapStateToProps = state => {
  // state comes from store which takes reducer as parameter, so state comes from reducer
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  // event comes from where the onSearchChange been called
  return {
    // call onSearchChange 相当于 call dispatch（setSearchField）
    // dispatch will send the action to reducer, reducer will reduce the action based on action.type, and update the state to return the new state
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
    // onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      // searchField:"",
      // robots: []
    };
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => response.json())
    //   .then(data => this.setState({ robots: data }));
    this.props.onRequestRobots();
  }

  // onSearchChange = event => {
  //   this.setState({ searchfield: event.target.value });
  // };

  render() {
    // const { robots,searchField } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

// connect --> higher order fn, which returns another fn.
// App is the component which needs state.

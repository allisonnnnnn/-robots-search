import { CHANGE_SEARCHFIELD } from "./constants";

// Single source of truth
const initialState = {
  searchField: ""
};

// Reducer pure function
export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    // return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

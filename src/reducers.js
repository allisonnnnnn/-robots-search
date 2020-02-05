import { CHANGE_SEARCHFIELD } from "./constants";

// Single source of truth
const initialState = {
  searchField: "",
  list: []
};

// Reducer: pure function
export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      // 在return之前console.log();
      // state object 里的 searchField被action.payload赋值，...state --> state里的其他state不变。
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

// return Object.assign({}, state, { searchField: action.payload });

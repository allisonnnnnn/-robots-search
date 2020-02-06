import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILD
} from "./constants";

// Single source of truth
const initialStateSearch = {
  searchField: "",
  list: []
};

// Reducer: pure function
export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      // 在return之前console.log();
      // state object 里的 searchField被action.payload赋值，...state --> state里的其他state不变。
      // return Object.assign({}, state, { searchField: action.payload });
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ""
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case REQUEST_ROBOTS_FAILD:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};

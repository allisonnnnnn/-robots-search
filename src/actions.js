import { CHANGE_SEARCHFIELD } from "./constants";

export const setSearchField = text => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
});

// is the payload value alwayes the same as the parameter of the action?

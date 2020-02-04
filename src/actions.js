import { CHANGE_SEARCHFIELD } from "./constants";

export const setSearchField = text => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
});

// payload is text, and it will be send via event
// do we send the payload:text or the parameter text?
// is the payload value alwayes the same as the parameter of the action?

import { createStore } from "redux";
import { TYPES } from "./actions";

const initialState = {
  events: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === TYPES.GOT_EVENTS) {
    state = [...state, action.events];
  }
  return state;

  // switch (action.type) {
  //   case TYPES.GOT_EVENTS:
  //     return {
  //       ...state,
  //       events: action.events,
  //     };

  //   case TYPES.PUT_EVENTS:
  //     return {
  //       ...state,
  //       events: action.events, //unsure what to put here
  //     };

  //   case TYPES.DELETE_EVENTS:
  //     return {
  //       ...state,
  //       events: action.events, //unsure what to put here
  //     };
  // }
};

const store = createStore(reducer);

export default store;

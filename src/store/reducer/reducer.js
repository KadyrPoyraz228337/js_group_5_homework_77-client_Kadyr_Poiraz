import {FETCH_DATA} from "../actions/forum";

const initialState = {
    messages: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_DATA:
          return {
              ...state,
              messages: [...action.data]
          };
      default: return state
  }
};

export default reducer;
const INITIAL_STATE = {};

export default function triggersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_TRIGGERS': {
      state = [...action.payload];
      return state;
    }
    default:
      return state;
  }
}

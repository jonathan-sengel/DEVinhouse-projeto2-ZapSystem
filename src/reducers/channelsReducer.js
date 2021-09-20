const INITIAL_STATE = {};

export default function channelsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_CHANNELS': {
      state = [...action.payload];
      return state;
    }
    default:
      return state;
  }
}

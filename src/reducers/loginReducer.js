const INITIAL_STATE = false;

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN': {
      state = action.payload;
      return state;
    }
    case 'LOGOUT': {
      state = action.payload;
      return state;
    }
    case 'VALIDATE_LOGIN': {
      return state;
    }
    default:
      return state;
  }
}

const INITIAL_STATE = {
  allData: [],
  editingData: {},
};

export default function messagesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_MESSAGES': {
      state = {
        allData: [...action.payload],
        editingData: { ...state.editingData },
      };
      return state;
    }
    case 'SET_EDIT_MESSAGE': {
      state = {
        allData: [...state.allData],
        editingData: { ...action.payload },
      };
      return state;
    }
    default:
      return state;
  }
}

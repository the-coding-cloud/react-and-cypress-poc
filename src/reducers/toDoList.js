import { HANDLE_TO_DO, ADD_TO_DO, REMOVE_TO_DO } from '../actions/actionTypes'

const initialState = [
  {
    title: 'Do your homework',
    checked: false,
    id: 0
  }
];

export default (state= initialState, action) => {
  switch (action.type) {
    case HANDLE_TO_DO:
      const index = state.findIndex(el => el.id === action.payload.id)
      return ([
        ...state.slice(0, index),
        action.payload,
        ...state.slice(index + 1)
      ]);
      break;
    case ADD_TO_DO:
      return ([
        ...state,
        {
          title: action.payload,
          checked: false,
          id: state.length
        }
      ]);
      break;
    case REMOVE_TO_DO:
      const idx = state.findIndex(el => el.id === action.payload)
      return ([
        ...state.slice(0, idx),
        ...state.slice(idx + 1, state.length)
      ]);
      break;
    default:
        return state
  }
}

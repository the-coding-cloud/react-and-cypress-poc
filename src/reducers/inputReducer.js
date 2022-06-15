import { CHANGE_VALUE } from '../actions/actionTypes'

const initialState = {
  value: '',
  dummy: 0
};

export default (state= initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        value: action.payload
      };
      break;
    default:
      return state
  }
}

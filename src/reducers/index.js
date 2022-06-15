import { combineReducers } from 'redux'
import toDoList from "./toDoList";
import inputReducer from "./inputReducer";

const reducer = combineReducers({
  toDoList,
  inputReducer
});

export default reducer

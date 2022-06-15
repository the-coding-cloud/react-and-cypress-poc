import { HANDLE_TO_DO, ADD_TO_DO, REMOVE_TO_DO } from './actionTypes'

export const handleToDoItem = (payload) => ({
  type: HANDLE_TO_DO,
  payload
});

export const handleAddToDo = (payload) => ({
  type: ADD_TO_DO,
  payload
});

export const handleRemoveToDo = (payload) => ({
  type: REMOVE_TO_DO,
  payload
});

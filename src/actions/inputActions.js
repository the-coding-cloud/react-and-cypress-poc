import { CHANGE_VALUE, SET_DUMMY } from './actionTypes'

export const handleChangeValue = (payload) => ({
  type: CHANGE_VALUE,
  payload
});

export const setDummy = (payload) => ({
  type: SET_DUMMY,
  payload
});

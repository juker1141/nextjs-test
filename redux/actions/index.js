import * as t from './types';

export const updateName = (status) => dispatch => dispatch({
  type: t.SET_NAME,
  payload: status
});
import * as t from '../actions/types';

const nameReducer = (state = 'hehe', action) => {
  switch(action.type) {
    case t.SET_NAME:
      return action.payload;
    default:
      return state;
  };
};

export default nameReducer
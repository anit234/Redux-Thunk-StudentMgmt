import { actionTypes } from './actionTypes';

const initialState = {
  allStudents: [],
  singeStudent: {},
};

export const studentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SHOW_ALL_STUDENT:
      return { ...state, allStudents: payload };
    case actionTypes.ADD_STUDENT:
      return { ...state };
    case actionTypes.DELETE_STUDENT:
    case actionTypes.GET_SINGLE_STUDENT:
      return { ...state, singleStudent: payload };
    case actionTypes.UPDATE_STUDENT:
      return { ...state };
    default:
      return state;
  }
};

import { combineReducers } from 'redux';
import { studentReducer } from './reducer';

export const reducer = combineReducers({ allStudentsData: studentReducer });

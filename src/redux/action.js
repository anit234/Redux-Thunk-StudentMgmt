import axios from 'axios';
import { actionTypes } from './actionTypes';

export const studentShowAll = (students) => {
  return { type: actionTypes.SHOW_ALL_STUDENT, payload: students };
};

export const showAllStudents = () => async (dispatch) => {
  const resp = await axios.get('http://localhost:8801/students');
  dispatch(studentShowAll(resp.data));
};

// Action creator for add
export const studentAdd = () => {
  return {
    type: actionTypes.ADD_STUDENT,
  };
};

export const addStudent = (student) => (dispatch) => {
  axios
    .post('http://localhost:8801/students', student)
    .then((res) => {
      console.log('add res', res);
      dispatch(studentAdd());
      dispatch(showAllStudents());
    })
    .catch((err) => console.log(err));
};

// action creator for delete

export const studentDelete = () => {
  return {
    type: actionTypes.DELETE_STUDENT,
  };
};

export const deleteStudent = (id) => async (dispatch) => {
  const resp = await axios.delete(`http://localhost:8801/students/${id}`);
  dispatch(studentDelete(resp));
  dispatch(showAllStudents());
};

// action creator for single User
export const getStudent = (student) => {
  return {
    type: actionTypes.GET_SINGLE_STUDENT,
    payload: student,
  };
};

export const getSingleStudent = (id) => async (dispatch) => {
  const resp = await axios.get(`http://localhost:8801/students/${id}`);
  dispatch(getStudent(resp.data));
};

// action creator for update student

export const studentUpdate = () => {
  return {
    type: actionTypes.UPDATE_STUDENT,
  };
};

export const updateStudent = (student, id) => async (dispatch) => {
  const resp = await axios.put(`http://localhost:8801/students/${id}`, student);
  dispatch(studentUpdate(resp.data));
  dispatch(showAllStudents());
};

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './module.style.css';
import { updateStudent, getSingleStudent } from '../redux/action';

const EditStudent = () => {
  const [state, setState] = useState({
    full_name: '',
    grade: '',
    address: '',
    result: '',
  });
  const [error, setError] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { full_name, grade, address, result } = state;
  const single_student_data = useSelector(
    (state) => state.allStudentsData.singleStudent
  );
  // for edit student
  useEffect(() => {
    dispatch(getSingleStudent(id));
  }, []);

  useEffect(() => {
    if (single_student_data) {
      setState({ ...single_student_data });
    }
  }, [single_student_data]);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!full_name || !grade || !address || !result) {
      setError(setError('All values are mandatory !!'));
    } else {
      dispatch(updateStudent(state, id));
      history.push('/');
      setError('');
    }
  };

  return (
    <div>
      <Form className="addStudentForm" onSubmit={handleSubmit}>
        <h3>Edit Student</h3>
        {error && <h2 style={{ color: 'red' }}>{error}</h2>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={full_name}
            name="full_name"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Grade</Form.Label>
          <Form.Control
            type="text"
            placeholder="Grade"
            value={grade}
            name="grade"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            value={address}
            name="address"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Result</Form.Label>
          <Form.Control
            type="text"
            placeholder="Result"
            placeholder="result"
            value={result}
            name="result"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
        <Button
          className="btn btn-danger m-2"
          type="submit"
          onClick={() => {
            history.push('/');
          }}
        >
          Cancle
        </Button>
      </Form>
    </div>
  );
};

export default EditStudent;

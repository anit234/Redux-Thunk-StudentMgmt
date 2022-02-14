import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './module.style.css';
import { addStudent } from '../redux/action';

const AddStudent = () => {
  const [state, setState] = useState({
    full_name: '',
    grade: '',
    address: '',
    result: '',
  });
  const [error, setError] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const { full_name, grade, address, result } = state;

  const handleChange = (e) => {
    console.log(e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!full_name || !grade || !address || !result) {
      setError('All fields are mandatory!!');
    } else {
      dispatch(addStudent(state));
      history.push('/');
    }
  };

  return (
    <div>
      <Form className="addStudentForm" onSubmit={handleSubmit}>
        <h3>Add Student</h3>
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
            value={result}
            name="result"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddStudent;

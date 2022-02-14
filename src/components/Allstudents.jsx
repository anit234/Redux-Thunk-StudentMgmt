import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './module.style.css';
import { useHistory } from 'react-router-dom';
import { showAllStudents, deleteStudent } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

const Allstudents = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const allStudentsData = useSelector(
    (state) => state.allStudentsData.allStudents
  );

  useEffect(() => {
    dispatch(showAllStudents());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('your data will be delete are you sure to delete')) {
      dispatch(deleteStudent(id));
    }
  };

  return (
    <div>
      <Table striped bordered hover className="allStudent-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
            <th>Address</th>
            <th>Result</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allStudentsData.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.full_name}</td>
                <td>{student.grade}</td>
                <td>{student.address}</td>
                <td>{student.result}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => {
                      history.push(`/editStudent/${student.id}`);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete-button"
                    onClick={() => {
                      handleDelete(student.id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Allstudents;

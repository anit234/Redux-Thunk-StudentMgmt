import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import std123 from '../std123.png';
import './module.style.css';

const NavigationBar = () => {
  const history = useHistory();
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
    !isToggled ? history.push('/') : history.push('/addStudent');
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={std123} className="logo-img" /> Student Management System
          </Navbar.Brand>
          <Nav className="me-auto myNav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="success" onClick={handleClick}>
              {!isToggled ? 'Go Back' : 'Add Students'}
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function NavBar({user}) {
  const onLoggedOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  }; 

    

    const isAuth = () => {
        if (typeof window == 'undefined') {
            return false;
        }
        if (localStorage.getItem('token')) {
            return localStorage.getItem('token');
        } else {
            return false;
        }
    };

    return (
        <Navbar className="dark-bg" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">My Fave Flixes</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav className="me-auto">
        {isAuth() && <Nav.Link href='/'>Movies</Nav.Link>}
        {isAuth() && <Nav.Link href={`/users/${user}`}>Profile</Nav.Link>}
        {isAuth() && <Button onClick={onLoggedOut}>Logout</Button>}
        {!isAuth() && <Nav.Link href='/'>Login</Nav.Link>}
        {!isAuth() && <Nav.Link href='/register'>Sign-up</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );

}


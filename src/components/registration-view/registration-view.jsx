import React, {useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Navbar, Nav, Form, Button, Col, Row, CardGroup, Card, Container } from 'react-bootstrap';

import './registration-view.scss';
//import axios from 'axios';

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr("Username Required");
      isReq = false;
    } else if (username.length < 2) {
      setUsernameErr("Username must be 2 characters long");
      isReq = false;
    }
    if (!password) {
      setPasswordErr("Password Required");
      isReq = false;
    } else if (password.length < 6) {
      setPasswordErr("Password must be 6 characters long");
      isReq = false;
    }
    if (!email) {
      setEmailErr("Email Required");
      isReq = false;
    } else if (email.indexOf("@") === -1) {
      setEmailErr("Email is invalid");
      isReq = false;
    }

    return isReq;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(username, password, email, birthday);
   // props.Registration(username);
   const isReq = validate();
   if (isReq) {
     axios
       .post("https://myFaveFlixes.herokuapp.com/users", {
         Username: username,
         Password: password,
         Email: email,
         Birthday: birthday,
       })
       .then((response) => {
         const data = response.data;
         console.log(data);
         alert("Registration successful, please login!");
         window.open("/", "_self"); //the second argument '_self' makes the page open in the current tab
       })
       .catch((response) => {
         console.error(response);
         alert("unable to register");
       });
   }
  };

    return (


    <Container fluid className="regContainer">

        <Navbar bg="navColor" variant="dark" expand="lg">
         <Container fluid>
          <Navbar.Brand href="#home">My Fave Flixes</Navbar.Brand>
          <Nav className="me-auto">
           <Nav.Link href="#logout">Register</Nav.Link>
          </Nav>
         </Container>
        </Navbar>

      <Row>
       <Col></Col>
          <Col>
            <CardGroup>
              <Card className="regCard">
                <Card.Body>
                   <Card.Header>Please Register</Card.Header>
                        <Form>
            <Form.Group>
            <Form.Label>Username:</Form.Label>
                <Form.Control 
                type="text" 
                value={username} 
                onChange={ (e) => setUsername(e.target.value)} 
                //required
                minLength="8"
                placeholder="Enter a Username"
                />
                {usernameErr && <p>{usernameErr}</p>}
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                 type="password" 
                 value={password} 
                 onChange={ (e) => setPassword(e.target.value)} 
                 //required 
                 minLength="Must be 8 or more characters" 
                 />
                 {passwordErr && <p>{passwordErr}</p>}
            </Form.Group>
            
            <Form.Group>
            <Form.Label>Email:</Form.Label>
                <Form.Control 
                type="email" 
                value={email} 
                onChange={ (e) => setEmail(e.target.value)} 
                placeholder="Please Enter Your Email Address"
                />
                {emailErr && <p>{emailErr}</p>}
            
            <Form.Label>Birthday:</Form.Label>
                <Form.Control 
                type="birthday" 
                value={birthday} 
                onChange={ (e) => setBirthday(e.target.value)} 
                placeholder="Enter your birthday"
                 />
            </Form.Group>
            
            <Button 
            className="regButton mt-2 mr-2"
            variant="primary" 
            type="submit" 
            onClick={handleSubmit}>Register</Button>

            <Button 
            className="back-button mt-2"
            variant="secondary"
            type="button" 
            onClick={() => {onBackClick(null); }}>Return to Login Page</Button>
            </Form>
            </Card.Body>
          </Card>
        </CardGroup>
      </Col>
    <Col></Col>
  </Row>
</Container>
    );
}

RegistrationView.propTypes = {register: PropTypes.shape({
  Username: PropTypes.string.isRequired,
  Password: PropTypes.string.isRequired,
  Email: PropTypes.string.isRequired,
}),
};
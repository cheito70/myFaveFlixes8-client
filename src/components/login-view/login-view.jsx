import React, { useState }  from 'react';
import {Form, Col, Row, Container, Card, CardGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './login-view.scss';

export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    //declare a hook for each input
    const [usernameErr, setUsernameErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    //validate user inputs
    const validate = () => {
        let isReq = true;

        setUsernameErr('');
        setPasswordErr('');

        if (!username) {
            setUsernameErr("Username is required.");
            isReq = false;
        } else if (username.length < 3) {
            setUsernameErr("Username must be at least 3 characters long.");
            isReq = false;
        }
        if (!password) {
            setPasswordErr("Password is required.");
            isReq = false;
        } else if (password.length < 6) {
            setPasswordErr("Password must be at least 6 characters long.");
            isReq = false;
        }
        return isReq;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isReq = validate();
        if (isReq) {
        /* Send a request to the server for authentication*/
        axios.post( 'https://myfaveflixes.herokuapp.com/login', {
        Username: username,
        Password: password
        })
        .then((response) => {
            const data = response.data;
            props.onLoggedIn(data);
        })
        .catch((err) => {
            console.log('wrong username or password!!!' + err);
        });
       }
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        console.log("clicked Register");
        props.toggleRegister(false);
    };


    return (

        
<Container fluid className="login-container">
    <Row className="login-card"> 
        <Col></Col>
            <Col>
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title>Login Here</Card.Title>
                            <Form className="login-border">
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    placeholder="Username Here" 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} />
                                    {/* validation errors display here*/}
                                    {usernameErr && <p className="alert alert-danger">{usernameErr}</p>}
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control 
                                    type="password" 
                                    placeholder="Password Here"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                    {/* validation errors display here */}
                                    {passwordErr && <p className="alert alert-danger">{passwordErr}</p>}
                                </Form.Group>
                                <Button 
                                className="login-button mt-2 mr-2"
                                variant="success" 
                                type="submit" 
                                onClick={handleSubmit}>Login</Button>

                                <Button 
                                className="register-button mt-2" 
                                variant="secondary" 
                                type="submit"
                                onClick={handleRegisterClick}>Register</Button>
                            </Form>
            </Card.Body>
            </Card>
            </CardGroup>
                </Col>
            <Col></Col>
        </Row>
        <Row className="justify-content-center m-1">
        <Link to={"/register"}>
          {''}
          <a className="text-muted">Click here to register a new account.</a>
        </Link>
      </Row>
    </Container>
    );
}

LoginView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired
}
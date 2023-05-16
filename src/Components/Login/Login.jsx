// import React from 'react';

import { Button, Container, Form } from "react-bootstrap";
// import AuthProvider from "../AuthProvider/AuthProvider";

const Login = () => {
    const handleOnSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        // const photo = form.photo.value;
        const password = form.password.value;
        console.log(form, email, password);

    }
    // const { createUser } = userContext(AuthProvider)

    return (
        <Container>
            <Form onSubmit={handleOnSubmit} className="my-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Login;
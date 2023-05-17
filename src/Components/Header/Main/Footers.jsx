// import React from 'react';

import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Footers = () => {
    return (
        <div className="bg-black " style={{ height: '300px' }}>
            <Container className="pt-5">
                <Row>
                    <Col sm className="text-light">
                        <h2>Green Cookers</h2>
                        <p>Green Cookers sends you fresh, organic, sustainable
                            ingredients and delicious recipes to help you cook incredible meals at home.
                        </p>
                    </Col>
                    <Col sm className="text-light">
                        <h2>Menu</h2>
                        <h6>Blogs</h6>
                        <h6>About</h6>
                        <h6>Contact</h6>
                    </Col>
                    <Col sm className="text-light">
                        <h2>Social Media</h2>
                        <h6>Facebook</h6>
                        <h6>Twiter</h6>
                        <h6>Instragram</h6>
                    </Col>
                    <Col sm>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><h4 className="text-light">Contact Us</h4></Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <div className="">
                <p className="text-light text-center mx-auto pt-2">&copy; Green Cookers copy right</p>
            </div>
        </div>
    );
};

export default Footers;
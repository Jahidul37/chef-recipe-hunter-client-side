// import React from 'react';
import { useState } from 'react';

import { Button, Card, Col } from "react-bootstrap";


const Blogdetails = ({ data }) => {

    const { title, details } = data;

    return (


        <Col >
            <Card >
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="mb-2">
                        {details}
                    </Card.Text>
                </Card.Body>
                <Button variant="primary">Print</Button>
            </Card>
        </Col>


    );
};

export default Blogdetails;
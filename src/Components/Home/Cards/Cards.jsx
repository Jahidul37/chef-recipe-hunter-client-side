// import React from 'react';

import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const Cards = ({ data }) => {
    const { chefId, yearOfExperience, chefImage, chefName, likes, numberOfRecipes } = data;
    return (
        <Col >
            <Card>
                <Card.Img style={{ height: '300px', width: 'auto' }} variant="top" src={chefImage} />
                <Card.Body>
                    <Card.Title><h4>{chefName}</h4></Card.Title>
                    <h5>Year of Experience : {yearOfExperience}</h5>
                    <div className="d-flex justify-content-between">
                        <p>{likes}</p>
                        <p>{numberOfRecipes}</p>
                    </div>
                    <Link to={`/chef/${chefId}`}><Button variant="primary">View Recipes</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Cards;
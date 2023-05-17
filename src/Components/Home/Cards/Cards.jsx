// import React from 'react';

import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import image5 from './../../../assets/like.png'
import image6 from './../../../assets/salad.png'


const Cards = ({ data }) => {
    const { chefId, yearOfExperience, chefImage, chefName, likes, numberOfRecipes, chefBio } = data;
    return (
        <Col >
            <Card>
                <Card.Img style={{ height: '300px', width: 'auto' }} variant="top" src={chefImage} />
                <Card.Body>
                    <Card.Title><h4>{chefName}</h4></Card.Title>
                    <h5>{yearOfExperience} Year of Experience</h5>
                    <div className="d-flex justify-content-between">
                        <p><img className="m-2" style={{ height: '20px', }} src={image5} alt="" />{likes}</p>
                        <p><img className="m-1" style={{ height: '20px', }} src={image6} alt="" />{numberOfRecipes}</p>
                    </div>
                    <Link to={`/chef/${chefId}`}><Button variant="primary">View Recipes</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Cards;
// import React from 'react';

import { useLoaderData } from "react-router-dom";
import RecipeCards from "./RecipeCards";
import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";


const ShapeDetail = () => {
    const chefData = useLoaderData();
    console.log(chefData);
    const { chefImage, chefName, chefBio } = chefData;
    const [recipies, setRecipies] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/recipesdata/${chefData.recipeId}`)
            .then(res => res.json())
            .then(data => {
                setRecipies(data);
            })
    }, [])
    return (
        <Container className="my-3 ">
            <Card className="my-4">
                <Card.Img style={{ height: '450px', width: 'auto' }} src={chefImage} />
                <Card.Body>
                    <Card.Title>{chefName}</Card.Title>
                    <Card.Text>
                        <p>{chefBio}</p>
                    </Card.Text>

                </Card.Body>
            </Card>

            <RecipeCards recipies={recipies}></RecipeCards>
        </Container>
    );
};

export default ShapeDetail;
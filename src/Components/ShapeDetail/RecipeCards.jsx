import { Card, Col, Row } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useState } from 'react';

const RecipeCards = ({ recipies }) => {
    const [rating, setRating] = useState(0)
    console.log(recipies);
    return (
        <div>

            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    recipies?.map((recipie, i) => (
                        <Col key={i}>
                            <Card>
                                <Card.Img style={{ height: '300px', width: 'auto' }} variant="top" src={recipie.recipeImg} />
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <div>
                                        <h5>{recipie.recipeName}</h5>
                                        {
                                            recipie.ingredients.map(data => <p
                                                key={data.id}>{data}</p>)
                                        }
                                    </div>

                                    <p><h6>Recipie Process:</h6> {recipie.methodOfCooking}</p>
                                    <p className='d-flex align-items-center'>
                                        <Rating
                                            style={{ maxWidth: 150 }} value={Math.round(rating?.rating || 0)} read /><span className='ms-2'>{recipie?.rating}</span>
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                    ))
                }
            </Row>
        </div>
    );
};

export default RecipeCards;
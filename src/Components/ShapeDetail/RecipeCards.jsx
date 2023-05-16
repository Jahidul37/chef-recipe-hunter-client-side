import { Card, Col, Row } from 'react-bootstrap';

const RecipeCards = ({ recipies }) => {
    // console.log(recipies);
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
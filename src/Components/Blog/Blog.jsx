// import React from 'react';
import { useLoaderData } from "react-router-dom";
import Blogdetails from "./Blogdetails";
import { Container, Row } from "react-bootstrap";

const Blog = () => {
    const blogdata = useLoaderData();
    // console.log(blogdata);

    return (
        <>
            <Container>
                <h2 className="text-center my-4">Question And Answer..</h2>

                <Row xs={1} md={2} lg={4} className="g-4">

                    {
                        blogdata.map(data =>
                            <Blogdetails
                                key={data.id}
                                data={data}
                            ></Blogdetails>
                        )
                    }

                </Row>




            </Container>
        </>

    );
};

export default Blog;
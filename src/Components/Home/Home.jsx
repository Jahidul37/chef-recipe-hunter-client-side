/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import BannerPage from '../BannerPage/BannerPage';
import Cards from './Cards/Cards';
import CookShaperDetails from './CookShaperDetails/CookShaperDetails';

const Home = () => {
    const cookdata = useLoaderData();
    console.log(cookdata);

    return (
        <>
            <BannerPage></BannerPage>

            <Container className='my-4'>
                <Row xs={1} md={2} lg={3} className="g-4">

                    {
                        cookdata.map(data => <Cards
                            key={data.id}
                            data={data}
                        ></Cards>)
                    }

                </Row>

            </Container>
            <CookShaperDetails>

            </CookShaperDetails>
        </>
    );
};

export default Home;
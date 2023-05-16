/* eslint-disable no-unused-vars */
import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react';
import image from '../../assets/mohamed-nohassi-DdglEoIC2y4-unsplash.jpg';
import image2 from '../../assets/michael-wave-CYnQUywzBtI-unsplash.jpg'
import image3 from '../../assets/petr-sevcovic-e5Q5vWO55uU-unsplash.jpg'


const BannerPage = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className='text-white'>Welcome to the Green Cookies
                            <br /> of dalicious recipies</h2>
                        <p className='text-white'>
                            Discover a world of delicious and easy-to-follow recipes for any occasion. From classic family meals to creative and exotic dishes, our collection has something for everyone. With step-by-step instructions and beautiful photos,
                            cooking has never been more enjoyable. Start exploring now and lets cook up something amazing together!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2 className='text-white'>Welcome to the Green Cookies
                            <br /> of dalicious recipies</h2>
                        <p className='text-white'>
                            Discover a world of delicious and easy-to-follow recipes for any occasion. From classic family meals to creative and exotic dishes, our collection has something for everyone. With step-by-step instructions and beautiful photos,
                            cooking has never been more enjoyable. Start exploring now and lets cook up something amazing together!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2 className='text-white'>Welcome to the Green Cookies
                            <br /> of dalicious recipies</h2>
                        <p className='text-white'>
                            Discover a world of delicious and easy-to-follow recipes for any occasion. From classic family meals to creative and exotic dishes, our collection has something for everyone. With step-by-step instructions and beautiful photos,
                            cooking has never been more enjoyable. Start exploring now and lets cook up something amazing together!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default BannerPage;
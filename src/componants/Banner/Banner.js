import React from 'react';
import { Carousel } from 'react-bootstrap';
import c1 from '../img/c1.jpg';
import c2 from '../img/c2.jpg';
import c3 from '../img/c3.jpg';

const Banner = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item className='text-light'>
                <img
                    className="d-block w-100"
                    src={c1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5 className='text-light'>First slide label</h5>
                    <p className='text-light'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={c2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5 className='text-light'>Second slide label</h5>
                    <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={c3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5 className='text-light'>Third slide label</h5>
                    <p className='text-light'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
import React from 'react';
import { Carousel } from 'react-bootstrap';
import c1 from '../img/c1.jpg';
import c2 from '../img/c2.jpg';
import c3 from '../img/c3.jpg';
import cycle from '../img/bluecycle.png';
import './Banner.css';



const Banner = () => {
    return (
        <div>

            <section className='d-flex flex-wrap justify-content-between align-items-center container mx-auto my-5'>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h3 className='text-uppercase text-success'>The Race Series</h3>
                    <h1 className='text-uppercase fw-bold my-4'>Featured Products</h1>
                    <p>Anybody who takes this survey will help protect the future of the Tour Series, as well as other major cycling events in the UK, by showcasing the positive impact that cycling has on host towns and cities.</p>
                    <div>
                        <button className='btn btn-light'>About Us</button>
                        <button className='btn btn-success m-4'>Shop Now</button>
                    </div>

                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 text-center">
                    <img src={cycle} className="img-fluid" alt="" />
                </div>
            </section>



        {/* <Carousel variant="dark">
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
        </Carousel> */}
        </div>
    );
};

export default Banner;
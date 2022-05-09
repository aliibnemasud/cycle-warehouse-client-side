import React from 'react';
import Stock from '../img/Stock.png';

const AboutUs = () => {
    return (
        <div className='bg-light'>
            <div className='container d-flex align-items-center py-3 my-5 justify-content-around'>
                <img src={Stock} alt="" />
                <div className='w-50'>
                    <h1>About Company</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum necessitatibus porro saepe veniam sequi. Molestiae ut esse aliquam nulla facere.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
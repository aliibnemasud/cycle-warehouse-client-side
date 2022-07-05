import React from 'react';
import Stock from '../img/Stock.png';

const AboutUs = () => {
    return (
        <div className='bg-light'>
            <div className='container d-flex flex-wrap align-items-center py-4 my-5 justify-content-around'>
                <img src={Stock} className="img-fluid" alt="" />
                <div className='w-50'>
                    <h1 className='text-uppercase fw-bold text-success'>About Company</h1>
                    <p className='my-4'>Cycle Warehouse is a private company. The company currently specializes in the Sporting Goods area. Its headquarters is located at Butler, Pennsylvania, USA. The number of employees ranges from 100 to 250. The annual revenue of Cycle Warehouse varies between 25M and 100M. To connect with Cycle Warehouse employee register</p>
                    <button className='btn btn-success'>Register Now</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
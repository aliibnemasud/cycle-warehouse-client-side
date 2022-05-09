import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Blogs from '../Blog/Blogs';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>            
            <Banner></Banner>            
            <Products></Products>
            <AboutUs></AboutUs>
            <Blogs></Blogs>            
        </div>
    );
};

export default Home;
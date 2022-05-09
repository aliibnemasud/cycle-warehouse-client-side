import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Blogs from '../Blog/Blogs';
import Product from '../Products/Product';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://safe-plateau-15202.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const sixProducts = products.slice(0,6);
    return (
        <div>            
            <Banner></Banner>            
            <div>            
            <h1 className='my-5 text-center'>Products</h1>
            <div className="container">
                <div className="row">                    
                        {
                            sixProducts.map(product => <Product key={product._id} product={product}></Product>)
                        }                    
                </div>
                <div className="text-center">
                <Link to='/manageinventory' className='btn btn-warning text-center mt-5'>Manage Inventory</Link>
                </div>
            </div>
        </div>
            <AboutUs></AboutUs>
            <Blogs></Blogs>            
        </div>
    );
};

export default Home;
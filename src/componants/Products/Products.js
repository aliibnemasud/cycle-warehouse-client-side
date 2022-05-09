import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('https://safe-plateau-15202.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])
    return (
        <div>            
            <h1 className='my-5 text-center'>Products ({products.length})</h1>
            <div className="container">
                <div className="row">                    
                        {
                            products.map(product => <Product key={product._id} product={product}></Product>)
                        }                    
                </div>
            </div>
        </div>
    );
};

export default Products;
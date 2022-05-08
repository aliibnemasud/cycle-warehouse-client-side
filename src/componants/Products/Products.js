import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])
    return (
        <div>            
            <h1 className='my-5 text-center'>Products ({products.length})</h1>

            <div className="container">
                <div className="row">                    
                        {
                            products.map(product => <Product product={product}></Product>)
                        }                    
                </div>
            </div>
        </div>
    );
};

export default Products;
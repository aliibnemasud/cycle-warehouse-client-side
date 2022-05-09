import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleProductInventory from './SingleProductInventory';

const InventoryProduct = () => {
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
                            products.map(product => <SingleProductInventory key={product._id} product={product} ></SingleProductInventory>)
                        }                    
                </div>
                <div className="text-center">
                <Link to='/manageinventory' className='btn btn-warning text-center mt-5'>Manage Inventory</Link>
                </div>
            </div>
        </div>
    );
};

export default InventoryProduct;
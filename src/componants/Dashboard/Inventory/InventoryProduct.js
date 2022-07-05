import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleProductInventory from './SingleProductInventory';
import Table from 'react-bootstrap/Table';
import ProductRow from './ProductRow';

const InventoryProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://safe-plateau-15202.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>           

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Supplier</th>
                        <th>Actation</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map((product, index) => <ProductRow index={index} key={product._id} product={product} ></ProductRow>)
                    }                    

                </tbody>
            </Table>          
        </div>
    );
};

export default InventoryProduct;
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState({});
    const { name, image, price, description, quantity, supplier } = product;

    useEffect(() => {
        const url = `https://safe-plateau-15202.herokuapp.com/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    
    // update product

    const updateQuantity = () => {

    }
    return (
        <div className='my-5 container' >            
            <div className='w-50 border p-4 mx-auto rounded'>
                <img src={image} alt="" />
                <h2 className='my-3'>Name: {name}</h2>
                <p>{description}</p>
                <div className="d-flex justify-content-between">
                    <h4>Quantity: {quantity}</h4>
                    <h4>Price: ${price}</h4>
                </div>
                <p>Supplier: {supplier}</p>
                <div className="d-flex justify-content-between">
                    <Button onClick={updateQuantity}>Add Quantity</Button>
                    <Button variant="success">Delivered</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
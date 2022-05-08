import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {productId} = useParams();
    const url = `http://localhost:3000/inventory/${productId}`;
    const [product, setProduct] = useState({});

    console.log(product);

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    
    return (
        <div>
            <h1>Name:{product.name} </h1>
        </div>
    );
};

export default ProductDetails;
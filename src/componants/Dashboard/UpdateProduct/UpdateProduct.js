import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const id = useParams();
    return (
        <div>
            <h1>Id: {id}</h1>
        </div>
    );
};

export default UpdateProduct;
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Product = ({ product }) => {
    const { _id, name, image, description, price, quantity, supplier } = product;
    const navigate = useNavigate();

    const navigateProductDetails = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='bg-light p-4 mb-4'>
                <img className='my-2 img-fluid' height={180} width={300} src={image} alt="" />
                <h3 className='text-success fw-bold mt-2'>{name}</h3>
                <p className='badge bg-warning fw-bold' title="Supplier" >{supplier}</p>
                <p>{description.slice(0, 100)}...</p>
                <div className='d-flex justify-content-between my-3'>
                    <div className=''>
                        <h5 className='fw-bold'>Qualtity: {quantity}</h5>                       
                    </div>
                    <h5 className='text-success fw-bold'>Price: ${price}</h5>
                </div>               
                
                <button onClick={() => navigateProductDetails(_id)} className='btn btn-success w-100'>Manage</button>
            </div>

        </div>
    );
};

export default Product;
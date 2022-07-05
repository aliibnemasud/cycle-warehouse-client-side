import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleProductInventory = ({ product }) => {    
    const {_id, name, image, description, price, quantity, supplier } = product;
    const navigate = useNavigate();

    const navigateProductDetails = id => {
        navigate(`/inventory/${id}`)
    }
    
    const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete this product? This product will deleted parmanently.");
    if(proceed){        
        console.log("Deleting User", id);
        const url = `https://safe-plateau-15202.herokuapp.com/product/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // const remaining = product.filter(product => product._id !== id);
           window.location.reload();
            
        })
    }
}    
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 text-center bg-light border p-4'>
            <img className='my-2' width={300} src={image} alt="" />
            <h3>{name}</h3>
            <p>{description.slice(0,150)}...</p>            
            <h3>Price: ${price}</h3>
            <h4>Qualtity: {quantity}</h4>
            <p>Supplier: {supplier}</p>
            <div className="d-flex">
            <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
            <button onClick={() => navigateProductDetails(_id)} className='btn btn-warning'>Details</button>
            </div>           
        </div>
    );
};
export default SingleProductInventory;
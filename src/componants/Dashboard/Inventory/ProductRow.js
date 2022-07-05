import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductRow = ({ product, index }) => {
    const { _id, name, image, description, price, quantity, supplier } = product;
    
    const navigate = useNavigate();
    
    const navigateProductDetails = id => {
        // navigate(`/inventory/${id}`)
        navigate(`inventory/${id}`)

    }
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure to delete this product? This product will deleted parmanently.");
        if (proceed) {
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
        <tr>
            <td>{index + 1}</td>
            <td> <img src={image} width="100px" alt="" /> </td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{supplier}</td>
            <td>
                <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
                <button onClick={() => navigateProductDetails(_id)} className='btn btn-warning'>Details</button>
            </td>
        </tr>
    );
};

export default ProductRow;
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Product = ({ product }) => {    
    const {_id, name, image, description, price, quantity, supplier } = product;
    const navigate = useNavigate();

    const navigateProductDetails = id => {
        navigate(`/inventory/${id}`)
    }
    
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 text-center bg-light border p-4'>
            <img className='my-2' width={300} src={image} alt="" />
            <h3>{name}</h3>
            <p>{description.slice(0,150)}...</p>            
            <h3>Price: ${price}</h3>
            <h4>Qualtity: {quantity}</h4>
            <p>Supplier: {supplier}</p>
            <button onClick={() => navigateProductDetails(_id)} className='btn btn-success'>Manage</button>

            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Title>{price}</Card.Title>
                    <h3>Quantity: {quantity}</h3>
                    <p>Supplier: {supplier}</p>
                    <Button variant="primary">Manage</Button>
                </Card.Body>
            </Card> */}
        </div>
    );
};

export default Product;
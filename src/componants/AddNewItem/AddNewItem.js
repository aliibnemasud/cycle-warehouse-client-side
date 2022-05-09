import React from 'react';

const AddNewItem = () => {
    const handleAddItem = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const image = e.target.image.value;

        const product = {name, description, price, quantity, supplier, image};       

        // post method to put the programme on the database
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(product) 
        })
        .then(res => res.json())
        .then(data => {
            console.log('Success', data);
        } )
    }
    
    return (
        <div className='container mt-5'>
            <h1 className='mt-5 text-center'>Add New Item</h1>
            <form onSubmit={handleAddItem} className="text-center" >
                <input className='form-control w-50 mx-auto' name="name" type="text" placeholder='Name' required /> <br />
                <input className='form-control w-50 mx-auto' name="description" type="text" placeholder='Description' required /> <br />
                <input className='form-control w-50 mx-auto' name="price" type="number" placeholder='Price' required /> <br />
                <input className='form-control w-50 mx-auto' name="quantity" type="number" placeholder='Quantity' required /> <br />
                <input className='form-control w-50 mx-auto' name="supplier" type="text" placeholder='Supplier' required /> <br />
                <input className='form-control w-50 mx-auto' name="image" type="text" placeholder='Image Link' required /> <br />
                <input className='btn btn-success w-50 mx-auto' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddNewItem;
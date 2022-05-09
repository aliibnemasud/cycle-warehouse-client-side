import React from 'react';
import { Link } from 'react-router-dom';
import InventoryProduct from '../Inventory/InventoryProduct';

const ManageInventory = () => {
    
    return (
        <div className='container mt-5'>
            <h1 className='mt-5 text-center'>Manage Inventory</h1>
            <Link to="/manageinventory/addnewitem" className='btn btn-success'>Add New Item</Link>
            <InventoryProduct></InventoryProduct>
        </div>
    );
};

export default ManageInventory;
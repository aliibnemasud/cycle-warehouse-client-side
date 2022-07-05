import React from 'react';
import { Link } from 'react-router-dom';
import InventoryProduct from '../Inventory/InventoryProduct';

const ManageInventory = () => {
    
    return (
        <div className='container'>
            <h3 className=''>Manage Inventory</h3>
            {/* <Link to="/manageinventory/addnewitem" className='btn btn-success'>Add New Item</Link> */}
            <InventoryProduct></InventoryProduct>
        </div>
    );
};

export default ManageInventory;
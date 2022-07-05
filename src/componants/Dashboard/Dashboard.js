import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className='mt-5 container mx-auto'>
            <div className="row">
                <div className="col-3">
                    <ul class="list-group">                        
                        <li class="list-group-item"><Link className='nav-link' to="manageinventory">Manage Inventory</Link></li>
                        <li class="list-group-item"><Link className='nav-link' to="additem">Add Item</Link></li>
                        <li class="list-group-item">My Items</li>
                        <li class="list-group-item">Review</li>
                        <li class="list-group-item">Manage Blog</li>
                        <li class="list-group-item">Profile</li>
                    </ul>                    
                </div>

                <div className="col-9">
                <Outlet />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
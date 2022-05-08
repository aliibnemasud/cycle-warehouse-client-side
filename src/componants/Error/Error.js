import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="text-center my-5">
            <h1 className="fw-bold">404</h1>
            <p>Page Not Found! <Link to='/home'>Home</Link></p>
        </div>
    );
};

export default Error;
import React from 'react';

const Loading = () => {
    return (
        <div className='d-flex align-items-center justify-content-center min-vh-100'>
            
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <h3 className='p-2'> Loading...</h3>
        </div>
    );
};

export default Loading;
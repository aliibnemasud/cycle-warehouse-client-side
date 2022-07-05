import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {

        fetch('https://safe-plateau-15202.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));

    }, [])
    return (
        <div className="container mt-5">
            <h1 className='my-5 text-center text-uppercase fw-bold text-success'>Our Blogs</h1>
            <div className="row container mx-auto">
            {
                blogs.map(blog =><Blog key={blog._id} blog={blog}></Blog>)
            }
        </div>
        </div>
    );
};

export default Blogs;
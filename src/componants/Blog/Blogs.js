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
        <div className="container">
            <h1 className='my-5 text-center'>Our Blogs</h1>
            <div className="row container mx-auto">
            {
                blogs.map(blog =><Blog key={blog._id} blog={blog}></Blog>)
            }
        </div>
        </div>
    );
};

export default Blogs;
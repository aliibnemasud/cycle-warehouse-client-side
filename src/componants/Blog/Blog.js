import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Blog = ({ blog }) => {

    const { image, title, desc, author } = blog;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 text-center p-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <p>{author}</p>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Blog;
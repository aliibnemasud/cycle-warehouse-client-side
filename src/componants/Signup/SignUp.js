import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../signIn/SocialLogin/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);   

    
    

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)

        .then(()=>{            
            navigate(from)            
        })
                
    }

    return (
        <div>
            <h1 className='text-center my-5'>Please Sign Up</h1>
            <Form className='container w-50 mt-5' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email"  required/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Aggree with terms and condition" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign Up
            </Button>
        </Form>

        <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;
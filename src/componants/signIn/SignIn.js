import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    // Location form came the user
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);    

    const handleSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
        
        .then(()=>{            
            navigate(from)            
        })       
    }

    return (
        <div>
            <h1 className='text-center my-5'>Please Sign In</h1>
            <Form className='container w-50 mt-5' onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />

                    <Form.Text className="text-muted">
                        Don't have account? <Link to='/signup'>Sign Up</Link>
                    </Form.Text>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignIn;
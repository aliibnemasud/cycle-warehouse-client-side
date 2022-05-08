import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);


    const [email, setEmail] = useState('');
    const [password, setPasswword] = useState('');




    const handleSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
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